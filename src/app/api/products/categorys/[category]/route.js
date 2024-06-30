import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
  const res = await prisma.product.findMany({
    where: {
      category: params.category,
    },
  });

  return NextResponse.json(res);
}
