"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProductTag from "@/components/ProductTag";

function page() {
  const [posts, setPosts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/products/categorys/${category}`);
      setPosts(res);
    };
    fetchData();
  }, []);

  return (
    <section id="shop">
      <div className="px-5 py-20 max-w-[1280px] m-auto">
        <h1 className="text-3xl font-bold">{category}</h1>
        {posts.length === 0 && (
          <h1 className="text-3xl font-bold">
            No hay productos en esta categoría
          </h1>
        )}
        <div className="grid grid-cols-3 gap-5 justify-between w-full">
          {posts.map((post) => (
            <ProductTag product={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
