import React from "react";
import Link from "next/link";

function AdminNavbar() {
  return (
    <div className="bg-black text-white flex justify-center p-5">
      <div className="flex justify-center items-center gap-10">
        <Link href={"/admin/"} className="text-2xl font-semibold">
          Inicio
        </Link>
        <Link href={"/admin/form"} className="text-2xl font-semibold">
          Nuevo producto
        </Link>
        <Link href={"/admin/category"} className="text-2xl font-semibold">
          Categorias
        </Link>
      </div>
    </div>
  );
}

export default AdminNavbar;
