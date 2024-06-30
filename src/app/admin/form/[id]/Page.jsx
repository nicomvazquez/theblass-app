"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import prisma from "@/libs/prisma";

function Page() {
  const [imgUrl, setImgUrl] = useState(null);
  const [categorys, setCategorys] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`/api/products/${params.id}`);
      const data = await res.json();
      setValue("name", data.name);
      setValue("description", data.description);
      setValue("price", data.price);
      setValue("stock", data.stock);
      setValue("category", data.category);
      setImgUrl(data.image);
    };
    loadData();
  }, []);

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
      <h1 className="text-4xl font-semibold pb-8">edit product</h1>
      <form
        action=""
        className="flex flex-col max-w-2xl text-2xl bg-white shadow-xl p-5 m-auto text-start rounded-lg"
        onSubmit={handleSubmit(async (data) => {
          const formdata = new FormData();
          formdata.append("name", data.name);
          formdata.append("description", data.description);
          formdata.append("price", data.price);
          formdata.append("category", data.category);
          formdata.append("stock", data.stock);
          if (data.image) {
            formdata.append("image", data.image[0]);
          }

          const res = await fetch(`/api/products/${params.id}`, {
            method: "PUT",
            body: formdata,
          });

          if (res.status === 200) {
            router.push("/admin/");
          }
        })}
      >
        <input
          type="text"
          placeholder="name"
          className="border-2 border-black rounded-md p-2"
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
          {...register("image")}
          onChange={() => {
            setImgUrl(null);
          }}
        />
        {errors.image && <span>image is required</span>}

        {imgUrl && (
          <img src={imgUrl} alt="preview" className="mt-5 rounded-lg" />
        )}

        <div className="flex justify-between">
          <button
            type="submit"
            className="mt-5 bg-green-500 py-2 px-3 rounded-md hover:bg-green-600"
          >
            submit
          </button>
          <button
            className="mt-5 bg-red-500 py-2 px-3 rounded-md hover:bg-red-600"
            onClick={async () => {
              const res = await fetch(`/api/products/${params.id}`, {
                method: "DELETE",
              });
              if (res.status === 200) {
                router.push("/admin/");
              }
            }}
          >
            eliminar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Page;
