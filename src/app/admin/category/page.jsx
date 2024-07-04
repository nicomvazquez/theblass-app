"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Page() {
  const [categorys, setcategorys] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/categorys");
      const data = await res.json();
      setcategorys(data);
    };
    load();
  }, []);

  return (
    <section className="text-center py-20 px-3">
      <div className="flex flex-col max-w-2xl text-2xl bg-white shadow-xl p-5 m-auto text-start rounded-lg">
        <form
          className="flex flex-col mb-7"
          onSubmit={handleSubmit(async (data) => {
            const res = await fetch("/api/categorys", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            if (res.ok) {
              const res = await fetch("/api/categorys");
              const data = await res.json();
              setcategorys(data);
            }
          })}
        >
          <input
            type="text"
            placeholder="Nombre"
            className="border-2 border-black rounded-md p-2"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <div>
            <button
              type="submit"
              className="mt-5 bg-green-500 py-2 px-3 rounded-md hover:bg-green-600"
            >
              submit
            </button>
          </div>
        </form>
        <div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 border-b">name</th>
                <th className="py-3 px-4 border-b">action</th>
              </tr>
            </thead>
            <tbody>
              {categorys.map((category) => (
                <tr key={category.id}>
                  <td className="py-3 px-4 border-b">{category.name}</td>
                  <td className="py-3 px-4 border-b">
                    <button
                      className=" bg-red-500 py-2 px-3 rounded-md hover:bg-red-600"
                      onClick={async () => {
                        const res = await fetch(
                          `/api/categorys/${category.id}`,
                          {
                            method: "DELETE",
                          }
                        );
                        if (res.ok) {
                          const res = await fetch("/api/categorys");
                          const data = await res.json();
                          setcategorys(data);
                        }
                      }}
                    >
                      eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Page;
