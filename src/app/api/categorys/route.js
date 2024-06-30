import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  const res = await prisma.category.findMany();
  return NextResponse.json(res);
}

export async function POST(request) {
  const { name } = await request.json();

  const res = await prisma.category.create({
    data: { name },
  });

  return NextResponse.json(res);
}
