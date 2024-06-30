import React from "react";
import FilterTag from "@/components/FilterTag";

function layoutTienda({ children }) {
  return (
    <main>
      <section
        id="home"
        className="h-[600px] flex items-center justify-center p-5"
      >
        <div className="flex bg-home  flex-col justify-center items-center w-full h-full rounded-xl">
          <h1 className="text-7xl font-semibold">TheBlass Store</h1>
          <p className="text-xl mt-3 font-semibold">
            Generated by create next app
          </p>
        </div>
      </section>

      <section id="about" className="text-center py-28">
        <div className="max-w-[1280px] m-auto">
          <h1 className="text-6xl mb-20 font-semibold">Quienes somos.</h1>

          <div className="flex justify-center gap-10 text-start my-5">
            <div className="max-w-md bg-white rounded-md p-5 border hover:-translate-y-3 transition-all shadow-lg">
              <h1 className="text-4xl mb-5 font-semibold">Quienes somos.</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quasi, quo, quia voluptatibus
                exercitationem.
              </p>
            </div>

            <div className="max-w-md bg-white rounded-md p-5 border hover:-translate-y-3 transition-all shadow-lg">
              <h1 className="text-4xl mb-5 font-semibold">Quienes somos.</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quasi, quo, quia voluptatibus
                exercitationem.
              </p>
            </div>

            <div className="max-w-md bg-white rounded-md p-5 border hover:-translate-y-3 transition-all shadow-lg">
              <h1 className="text-4xl mb-5 font-semibold">Quienes somos.</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quasi, quo, quia voluptatibus
                exercitationem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="px-5 bg-neutral-900 text-white w-full">
        <FilterTag />
      </div>
      {children}
    </main>
  );
}

export default layoutTienda;