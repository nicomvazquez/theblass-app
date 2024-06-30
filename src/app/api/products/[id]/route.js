import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
  const res = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(res);
}

export async function PUT(request, { params }) {
  try {
    const req = await request.formData();
    const img = req.get("img");
    const data = {
      name: req.get("name"),
      description: req.get("description"),
      price: Number(req.get("price")),
      stock: Number(req.get("stock")),
      category: req.get("category"),
    };

    if (img) {
      const bytes = await img.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const urlres = await new Promise((resolve, rejet) => {
        cloudinary.uploader
          .upload_stream({}, (err, result) => {
            if (err) rejet(err);
            resolve(result);
          })
          .end(buffer);
      });

      data.img = urlres.url;
    }

    const res = await prisma.product.update({
      where: {
        id: Number(params.id),
      },
      data: data,
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const res = await prisma.product.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error);
  }
}
