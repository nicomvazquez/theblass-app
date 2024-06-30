import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dddaaisk1",
  api_key: "741351179689411",
  api_secret: "h-SU-2efaRiJqM2tICam3BXGumw", // Click 'View Credentials' below to copy your API secret
});

export async function GET() {
  const res = await prisma.product.findMany();
  return NextResponse.json(res);
}

export async function POST(request) {
  const req = await request.formData();
  const image = req.get("image");

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const urlres = await new Promise((resolve, rejet) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) rejet(err);
        resolve(result);
      })
      .end(buffer);
  });

  const data = {
    name: req.get("name"),
    description: req.get("description"),
    price: Number(req.get("price")),
    stock: Number(req.get("stock")),
    category: req.get("category"),
    image: urlres.url,
  };

  const res = await prisma.product.create({
    data: data,
  });

  return NextResponse.json(res);
}
