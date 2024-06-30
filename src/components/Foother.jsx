import React from "react";
import Link from "next/link";

function Foother() {
  return (
    <footer className="px-5 py-10 bg-black text-white w-full">
      <div className="m-auto py-5 max-w-[1280px] flex justify-between items-start">
        <div>
          <Link href={"/"} className="text-5xl">
            TheBlass
          </Link>
          <p className="text-neutral-400 my-5">&copy; theblass.com</p>
          <Link href={"/admin"}>Admin panel</Link>
        </div>
        <Link href={"/admin"} className="text-xl">
          admin
        </Link>
      </div>
    </footer>
  );
}

export default Foother;
