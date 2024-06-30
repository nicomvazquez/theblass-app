import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
  const res = await prisma.category.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(res);
}

export async function PUT(request, { params }) {
  const req = await request.formData();

  const res = await prisma.category.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: req.get("name"),
    },
  });

  return NextResponse.json(res);
}

export async function DELETE(request, { params }) {
  try {
    const res = await prisma.category.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error);
  }
}
