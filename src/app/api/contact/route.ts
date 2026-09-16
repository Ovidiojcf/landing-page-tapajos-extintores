import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Contact endpoint is ready for integration." }, { status: 501 });
}