const NOTION_API_VERSION = "2022-06-28";
const NOTION_BASE_URL = "https://api.notion.com/v1";

type NotionText = {
  plain_text: string;
};

type NotionProperty = {
  type?: string;
  title?: NotionText[];
  rich_text?: NotionText[];
  date?: { start: string | null };
  select?: { name: string } | null;
  multi_select?: { name: string }[];
  checkbox?: boolean;
};

type NotionPage = {
  id: string;
  url: string;
  created_time: string;
  properties: Record<string, NotionProperty>;
};

type QueryDatabaseResponse = {
  results: NotionPage[];
};

export type NoticeItem = {
  id: string;
  title: string;
  summary: string;
  date: string;
  category?: string;
  pinned: boolean;
  url: string;
};

function getProperty(
  properties: Record<string, NotionProperty>,
  candidates: string[]
) {
  for (const key of candidates) {
    if (properties[key]) return properties[key];
  }
  return undefined;
}

function toPlainText(prop?: NotionProperty) {
  if (!prop) return "";
  if (prop.type === "title" && prop.title) {
    return prop.title.map((t) => t.plain_text).join("").trim();
  }
  if (prop.type === "rich_text" && prop.rich_text) {
    return prop.rich_text.map((t) => t.plain_text).join("").trim();
  }
  if (prop.title) return prop.title.map((t) => t.plain_text).join("").trim();
  if (prop.rich_text) return prop.rich_text.map((t) => t.plain_text).join("").trim();
  return "";
}

function toDateString(prop?: NotionProperty, fallback?: string) {
  if (prop?.date?.start) return prop.date.start;
  return fallback ?? "";
}

function toCategory(prop?: NotionProperty) {
  if (!prop) return undefined;
  if (prop.select?.name) return prop.select.name;
  if (prop.multi_select?.length) return prop.multi_select[0]?.name;
  return undefined;
}

function toPinned(prop?: NotionProperty) {
  return Boolean(prop?.checkbox);
}

function formatKoreanDate(dateValue: string) {
  if (!dateValue) return "";
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function mapNotice(page: NotionPage): NoticeItem {
  const { properties } = page;
  const titleProp =
    getProperty(properties, ["제목", "Title", "name", "Name"]) ||
    Object.values(properties).find((p) => p.type === "title");
  const summaryProp = getProperty(properties, ["요약", "Summary", "설명", "Description"]);
  const dateProp = getProperty(properties, ["날짜", "Date", "게시일", "Published"]);
  const categoryProp = getProperty(properties, ["카테고리", "Category", "분류"]);
  const pinnedProp = getProperty(properties, ["고정", "Pinned", "Important"]);

  return {
    id: page.id,
    title: toPlainText(titleProp) || "제목 없음",
    summary: toPlainText(summaryProp),
    date: formatKoreanDate(toDateString(dateProp, page.created_time)),
    category: toCategory(categoryProp),
    pinned: toPinned(pinnedProp),
    url: page.url,
  };
}

export async function getNoticesFromNotion() {
  const token = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!token || !databaseId) {
    return {
      notices: [] as NoticeItem[],
      error:
        "NOTION_API_KEY 또는 NOTION_DATABASE_ID 환경변수가 설정되지 않았습니다.",
    };
  }

  try {
    const response = await fetch(`${NOTION_BASE_URL}/databases/${databaseId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_API_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page_size: 50,
        sorts: [{ timestamp: "created_time", direction: "descending" }],
      }),
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      const body = await response.text();
      return {
        notices: [] as NoticeItem[],
        error: `Notion API 요청 실패 (${response.status}): ${body}`,
      };
    }

    const data = (await response.json()) as QueryDatabaseResponse;
    const notices = (data.results ?? []).map(mapNotice).sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return b.date.localeCompare(a.date);
    });

    return { notices, error: null };
  } catch (error) {
    return {
      notices: [] as NoticeItem[],
      error: error instanceof Error ? error.message : "알 수 없는 오류",
    };
  }
}
