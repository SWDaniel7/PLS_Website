"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    naver?: any;
  }
}

const LOCATION = {
  lat: 37.474329,
  lng: 127.049949,
  title: "PLS영재교육",
  address: "서울시 강남구 논현로10길 16 영재센터빌딩 4층",
};

const MAP_LABEL_SUBLINE = "영재센터 빌딩 4층";

function buildMapLabelElement(): HTMLDivElement {
  const root = document.createElement("div");
  root.className = "map-label";
  const main = document.createElement("div");
  main.className = "map-label-main";
  main.textContent = LOCATION.title;
  const sub = document.createElement("div");
  sub.className = "map-label-sub";
  sub.textContent = MAP_LABEL_SUBLINE;
  root.appendChild(main);
  root.appendChild(sub);
  return root;
}

/** 마커 좌표 위에 고정 라벨 DOM을 올리는 OverlayView (네이버 지도 v3). */
function attachPlsNameLabelOverlay(
  naver: NonNullable<Window["naver"]>,
  position: any
): { setMap: (m: any) => void } | null {
  const N = naver.maps;
  if (!N?.OverlayView) return null;

  const LabelOverlay = function (this: any, latLng: any) {
    N.OverlayView.call(this);
    this._position = latLng;
    this._root = buildMapLabelElement();
  } as any;

  LabelOverlay.prototype = Object.create(N.OverlayView.prototype);
  LabelOverlay.prototype.constructor = LabelOverlay;
  LabelOverlay.prototype.onAdd = function (this: any) {
    this.getPanes().overlayLayer.appendChild(this._root);
  };
  LabelOverlay.prototype.draw = function (this: any) {
    const projection = this.getProjection();
    if (!projection || !this.getMap()) return;
    const pixel = projection.fromCoordToOffset(this._position);
    if (!pixel) return;
    /** 라벨+꼬리가 핀 위로 뜨고, 꼬리 끝이 핀 상단 근처에 닿도록 (px, 조정 가능). */
    const liftAboveAnchorPx = 44;
    this._root.style.left = `${pixel.x}px`;
    this._root.style.top = `${pixel.y}px`;
    this._root.style.transform = `translate(-50%, calc(-100% - ${liftAboveAnchorPx}px))`;
  };
  LabelOverlay.prototype.onRemove = function (this: any) {
    this._root?.parentNode?.removeChild(this._root);
  };

  return new LabelOverlay(position);
}

// NEXT_PUBLIC_ 키는 브라우저에 원래부터 노출되는 공개 값이므로 소스에 fallback으로 보관합니다.
const NAVER_MAP_CLIENT_ID_DEFAULT = "obzbf0y5i3";

export type NaverMapPanelProps = {
  /** 서버(배포 환경)에서 주입 시 빌드 번들에 없던 키도 반영됩니다. 없으면 NEXT_PUBLIC_* 환경 변수를 사용합니다. */
  mapClientId?: string | null;
};

export default function NaverMapPanel({ mapClientId: mapClientIdProp }: NaverMapPanelProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const loadedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [statusText, setStatusText] = useState("지도를 불러오는 중입니다...");
  const fromProp = typeof mapClientIdProp === "string" ? mapClientIdProp.trim() : "";
  const fromEnv = (process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID ?? "").trim();
  const mapClientId = fromProp || fromEnv || NAVER_MAP_CLIENT_ID_DEFAULT;

  useEffect(() => {
    if (!mapClientId) {
      setHasError(true);
      setStatusText("지도 표시를 위한 설정이 완료되지 않았습니다.");
      return;
    }

    const scriptId = "naver-maps-sdk";
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let disposed = false;
    loadedRef.current = false;
    const mapInstances: { marker?: any; overlay?: any; infoWindow?: any } = {};

    const teardownMap = () => {
      mapInstances.infoWindow?.close?.();
      mapInstances.overlay?.setMap?.(null);
      mapInstances.marker?.setMap?.(null);
      mapInstances.infoWindow = undefined;
      mapInstances.overlay = undefined;
      mapInstances.marker = undefined;
    };

    const initMap = async () => {
      if (disposed) return;
      if (!window.naver?.maps || !mapRef.current) {
        setHasError(true);
        setStatusText("지도 API를 초기화하지 못했습니다.");
        return;
      }
      try {
        const naver = window.naver;
        const center = new naver.maps.LatLng(LOCATION.lat, LOCATION.lng);
        const map = new naver.maps.Map(mapRef.current, {
          center,
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
          },
        });

        const marker = new naver.maps.Marker({
          position: center,
          map,
          title: LOCATION.title,
          icon: {
            url: "https://static.naver.net/maps/v3/pin_default.png",
            size: new naver.maps.Size(22, 35),
            anchor: new naver.maps.Point(12, 35),
          },
        });
        mapInstances.marker = marker;
        map.setCenter(center);

        let labelAttached = false;
        try {
          const overlay = attachPlsNameLabelOverlay(naver, center);
          if (overlay) {
            overlay.setMap(map);
            mapInstances.overlay = overlay;
            labelAttached = true;
          }
        } catch {
          labelAttached = false;
        }

        if (!labelAttached) {
          const el = buildMapLabelElement();
          const iw = new naver.maps.InfoWindow({
            content: el,
            disableAnchor: true,
            borderWidth: 0,
            backgroundColor: "transparent",
            borderColor: "transparent",
            disableAutoPan: true,
            pixelOffset: new naver.maps.Point(0, -72),
          });
          iw.open(map, marker);
          mapInstances.infoWindow = iw;
        }

        loadedRef.current = true;
        setIsLoaded(true);
        if (timeoutId) clearTimeout(timeoutId);
      } catch (e) {
        setHasError(true);
        setStatusText("지도 렌더링 중 오류가 발생했습니다.");
      }
    };

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    timeoutId = setTimeout(() => {
      if (!disposed && !loadedRef.current) {
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
        teardownMap();
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${mapClientId}`;
    script.onload = initMap;
    script.onerror = () => {
      setHasError(true);
      setStatusText("지도 스크립트를 불러오지 못했습니다.");
    };
    document.head.appendChild(script);
    return () => {
      disposed = true;
      teardownMap();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [mapClientId]);

  return (
    <div className="relative h-full w-full min-h-0 max-[968px]:min-h-[420px]">
      <div ref={mapRef} className="h-full w-full" />
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
