"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function Page() {
  const [categorys, setCategorys] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/categorys");
      const data = await res.json();
      setCategorys(data);
    };
    load();
  }, []);

  return (
    <section className="text-center py-20 px-3">
      <h1 className="text-4xl font-semibold pb-8">new product</h1>
      <form
        action=""
        className="flex flex-col max-w-2xl text-2xl bg-white shadow-xl p-5 m-auto text-start rounded-lg"
        onSubmit={handleSubmit(async (data) => {
          const formdata = new FormData();
          formdata.append("name", data.name);
          formdata.append("description", data.description);
          formdata.append("price", data.price);
          formdata.append("image", data.image[0]);
          formdata.append("stock", data.stock);
          formdata.append("category", data.category);

          const res = await fetch("/api/products", {
            method: "POST",
            body: formdata,
          });

          if (res.status === 200) {
            router.push("/admin/");
          }
        })}
      >
        <input
          className="border-2 border-black rounded-md p-2"
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>name is required</span>}

        <textarea
          type="text"
          placeholder="description"
          className="mt-5 border-2 border-black rounded-md p-2"
          {...register("description", { required: true })}
        />
        {errors.description && <span>description is required</span>}

        <input
          type="number"
          placeholder="price"
          className="mt-5 border-2 border-black rounded-md p-2"
          {...register("price", { required: true })}
        />
        {errors.price && <span>price is required</span>}

        <select
          type="text"
          placeholder="category"
          className="mt-5 border-2 border-black rounded-md p-2"
          {...register("category", { required: true })}
        >
          {categorys.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        {errors.category && <span>category is required</span>}

        <input
          type="number"
          placeholder="stock"
          className="mt-5 border-2 border-black rounded-md p-2"
          {...register("stock", { required: true })}
        />
        {errors.stock && <span>stock is required</span>}

        <input
          type="file"
          placeholder="image"
          className="mt-5 "
          {...register("image", { required: true })}
        />
        {errors.image && <span>image is required</span>}

        <div>
          <button
            type="submit"
            className="mt-5 bg-green-500 py-2 px-3 rounded-md hover:bg-green-600"
          >
            submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Page;
