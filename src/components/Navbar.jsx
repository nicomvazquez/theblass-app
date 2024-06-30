"use client";
import React from "react";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

function Navbar() {
  return (
    <header className="px-5 shadow-md sticky top-0 bg-white z-10">
      <div className="m-auto py-5 max-w-[1280px] flex justify-between items-center">
        <Link href={"/"} className="text-4xl font-bold">
          TheBlass
        </Link>
        <div className="flex gap-7 text-xl">
          <Scroll to="home" smooth={true} duration={1000}>
            <h1>Inicio</h1>
          </Scroll>
          <Scroll to="about" smooth={true} duration={1000}>
            <h1>Nosotros</h1>
          </Scroll>
          <Scroll to="shop" smooth={true} duration={1000}>
            <h1>Tienda</h1>
          </Scroll>
          <Scroll to="contact" smooth={true} duration={1000}>
            <h1>Contacto</h1>
          </Scroll>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
