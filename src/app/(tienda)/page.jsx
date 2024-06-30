import React from "react";
import prisma from "@/libs/prisma";

import ProductTag from "@/components/ProductTag";

async function loadingPosts() {
  const res = await prisma.product.findMany();
  return res;
}

async function page() {
  const posts = await loadingPosts();
  return (
    <section id="shop">
      <div className="px-5 py-20">
        <div className="grid grid-cols-3 m-auto gap-5 justify-between max-w-[1280px]">
          {posts.map((post) => (
            <ProductTag product={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
