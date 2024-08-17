import React from "react";

const Product = ({ product }) => {
  return (
    <div className="w-[8rem] md:w-[15rem] shadow m-2 lg:m-2  rounded-xl overflow-hidden">
      <div className="flex justify-center bg-slate-100">
        <img src={product.thumbnail} alt="" className=" h-36  " />
      </div>
      <p className="text-sm px-3 py-2">{product.title}</p>
      <button className="py-1 m-2 border w-[90%] text-center rounded-xl  border-gray-900 hover:border-orange-500 hover:bg-orange-500">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
