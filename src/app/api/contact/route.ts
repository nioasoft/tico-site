import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Here you can integrate with email provider / CRM / Slack
    // For now, just echo back with minimal validation
    const required = ["name", "email"];
    for (const key of required) {
      if (!data?.[key]) {
        return NextResponse.json({ ok: false, error: `Missing ${key}` }, { status: 400 });
      }
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


