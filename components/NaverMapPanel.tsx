"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    naver?: any;
  }
}

const NAVER_MAP_CLIENT_ID = "obzbf0y5i3";
const LOCATION = {
  lat: 37.4770515,
  lng: 127.0492469,
  title: "PLS영재교육",
};
const LOCATION_QUERIES = [
  "서울 강남구 논현로10길 16 영재센터빌딩",
  "서울 강남구 논현로10길 16",
  "서울 강남구 개포동 논현로10길 16",
];

function toLatLngFromGeocodeItem(item: any) {
  const x = Number(item?.x);
  const y = Number(item?.y);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return { lat: y, lng: x };
}

export default function NaverMapPanel() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [statusText, setStatusText] = useState("지도를 불러오는 중입니다...");

  useEffect(() => {
    const scriptId = "naver-maps-sdk";
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let disposed = false;

    const resolveAddress = async () => {
      if (!window.naver?.maps?.Service?.geocode) return null;

      for (const query of LOCATION_QUERIES) {
        const result = await new Promise<any[] | null>((resolve) => {
          window.naver.maps.Service.geocode(
            {
              query,
            },
            (status: any, response: any) => {
              if (status !== window.naver.maps.Service.Status.OK) {
                resolve(null);
                return;
              }
              resolve(response?.v2?.addresses ?? null);
            }
          );
        });

        if (result && result.length > 0) {
          const candidate = toLatLngFromGeocodeItem(result[0]);
          if (candidate) return candidate;
        }
      }

      return null;
    };

    const initMap = async () => {
      if (disposed) return;
      if (!window.naver?.maps || !mapRef.current) {
        setHasError(true);
        setStatusText("지도 API를 초기화하지 못했습니다.");
        return;
      }
      try {
        const resolved = await resolveAddress();
        const center = new window.naver.maps.LatLng(
          resolved?.lat ?? LOCATION.lat,
          resolved?.lng ?? LOCATION.lng
        );
        const map = new window.naver.maps.Map(mapRef.current, {
          center,
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT,
          },
        });

        new window.naver.maps.Marker({
          position: center,
          map,
          title: LOCATION.title,
        });
        map.setCenter(center);
        setIsLoaded(true);
        if (timeoutId) clearTimeout(timeoutId);
      } catch (e) {
        setHasError(true);
        setStatusText("지도 렌더링 중 오류가 발생했습니다.");
      }
    };

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    timeoutId = setTimeout(() => {
      if (!disposed && !isLoaded) {
        setHasError(true);
        setStatusText("지도 인증 또는 도메인 설정을 확인해 주세요.");
      }
    }, 7000);

    if (existing) {
      if (window.naver?.maps) initMap();
      else {
        existing.addEventListener("load", initMap);
        existing.addEventListener("error", () => {
          setHasError(true);
          setStatusText("지도 스크립트를 불러오지 못했습니다.");
        });
      }
      return () => {
        disposed = true;
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAP_CLIENT_ID}&submodules=geocoder`;
    script.onload = initMap;
    script.onerror = () => {
      setHasError(true);
      setStatusText("지도 스크립트를 불러오지 못했습니다.");
    };
    document.head.appendChild(script);
    return () => {
      disposed = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isLoaded]);

  return (
    <div className="relative h-full w-full min-h-[600px] max-[968px]:min-h-[420px]">
      <div
        ref={mapRef}
        className="h-full w-full min-h-[600px] max-[968px]:min-h-[420px]"
      />
      {!isLoaded && !hasError ? (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--text-steel)]">
          {statusText}
        </div>
      ) : null}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--bg-surface-soft)] p-6 text-center">
          <p className="text-sm text-[var(--text-charcoal)]">
            {statusText}
          </p>
          <a
            href="https://map.naver.com/p/entry/place/2044921658?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202605062040&locale=ko&svcName=map_pcv5"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[var(--primary-navy)] underline underline-offset-2"
          >
            네이버 지도에서 열기
          </a>
        </div>
      ) : null}
    </div>
  );
}
