import React from "react";

function ProductTag({ product }) {
  return (
    <div className="p-5 rounded-md bg-white shadow-xl hover:-translate-y-5 transition-all">
      <img src={product.image} alt="" />
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <h1 className="text-xl">${product.price}</h1>
      </div>
    </div>
  );
}

export default ProductTag;
