import { NextResponse } from "next/server";
import { ContactPayload, validateContact } from "@/lib/contact";

export async function POST(request: Request) {
  const payload = await request.json() as ContactPayload;
  const error = validateContact(payload);
  if (error) return NextResponse.json({ error }, { status: 400 });

  // Integration point: forward the validated payload to the selected form service.
  return NextResponse.json({ ok: true, integrationPending: true }, { status: 202 });
}
