"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function FilterTag() {
  const [isOpen, setIsOpen] = useState(false);
  const [categorys, setCategorys] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/categorys");
      const data = await res.json();
      setCategorys(data);
    };
    load();
  }, []);

  return (
    <div className="m-auto py-5 max-w-[1280px] flex justify-center items-center gap-7">
      <Link href={"/"} className="text-4xl font-medium ">
        Inicio
      </Link>
      <h1 className=" text-4xl  font-medium">|</h1>
      <div className="relative inline-block text-left">
        <div
          type="button"
          className="inline-flex justify-center items-center w-full text-4xl  font-medium cursor-pointer"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <h1>Categorias</h1>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {categorys.map((c) => (
                <Link
                  href={`/${c.name}`}
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex="-1"
                  key={c.id}
                  onClick={toggleDropdown}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterTag;
