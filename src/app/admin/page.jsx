import React from "react";
import prisma from "@/libs/prisma";
import Link from "next/link";

async function loadingPosts() {
  const res = await prisma.product.findMany();
  return res;
}

async function page() {
  const posts = await loadingPosts();
  return (
    <section>
      <div className="max-w-[1280px] m-auto py-20 px-3">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 border-b">Image</th>
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Stock</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="bg-white hover:bg-gray-50">
                <td className="py-3 px-4 border-b">
                  <img
                    className="h-20 w-20 object-cover rounded-md"
                    src={post.image}
                    alt={post.name}
                  />
                </td>
                <td className="py-3 px-4 border-b">{post.name}</td>
                <td className="py-3 px-4 border-b">{post.stock}</td>
                <td className="py-3 px-4 border-b">{post.price}</td>
                <td className="py-3 px-4 border-b space-x-2">
                  <Link
                    href={`/admin/form/${post.id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default page;
