import { NextResponse } from "next/server";
import { bookings } from "@/lib/fakeDB";

export async function POST(req: Request) {
  const body = await req.json();

  bookings.push(body);

  return NextResponse.json({
    success: true,
    message: "Booking stored",
  });
}

export async function GET() {
  return NextResponse.json(bookings);
}