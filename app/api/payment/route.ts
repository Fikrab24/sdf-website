import { NextResponse } from "next/server";
import { payments } from "@/lib/fakeDB";

export async function POST(req: Request) {
  const body = await req.json();

  payments.push({
    ...body,
    status: "PAID",
  });

  return NextResponse.json({
    success: true,
    transactionId: Math.random().toString(36),
  });
}