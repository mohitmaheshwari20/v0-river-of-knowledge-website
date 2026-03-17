export interface ClassSession {
  date: string
  time: string
  topic: string
  description: string
  platform: string
  status: "upcoming" | "past"
}

export async function fetchClasses(): Promise<ClassSession[]> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY
  const sheetId = process.env.NEXT_PUBLIC_CLASSES_SHEET_ID

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`
  const res = await fetch(url, { cache: "no-store" })
  
  if (!res.ok) {
    console.log("Fetch failed:", res.status, res.statusText)
    return []
  }

  const data = await res.json()  
  const rows = data.values?.slice(1) || []

  return rows.map((row: string[]) => ({
    date: row[0] || "",
    time: row[1] || "",
    topic: row[2] || "",
    description: row[3] || "",
    platform: row[4] || "Zoom",
    status: (row[5]?.toLowerCase() || "upcoming") as "upcoming" | "past",
  }))
}