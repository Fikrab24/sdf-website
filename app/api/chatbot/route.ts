import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const msg = body.message.toLowerCase();

  let reply = "Hello 👋";

  if (msg.includes("cctv")) {
    reply =
      "We provide Hikvision, Dahua and smart CCTV installation.";
  } else if (msg.includes("network")) {
    reply =
      "We provide LAN, WiFi and enterprise networking services.";
  } else if (msg.includes("price")) {
    reply =
      "Please contact us on WhatsApp for pricing.";
  }

  return NextResponse.json({
    reply,
  });
}