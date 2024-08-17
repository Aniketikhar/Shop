import React from "react";

const Product = ({ product, theme }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };
  return (
    <div className={theme ? "bg-slate-800 w-[10rem] md:w-[12rem] lg:w-[15rem] shadow m-2 lg:m-2 rounded-xl overflow-hidden" : 'w-[10rem] md:w-[12rem] lg:w-[15rem] shadow m-2 lg:m-2 rounded-xl overflow-hidden'}>
      <div className={theme ? " flex relative justify-center bg-slate-200" : "flex relative justify-center bg-slate-100"}>
        <img src={product.thumbnail} alt="" className=" h-36  " />
        <p
          className={theme ? "text-black absolute right-1 bottom-3 text-sm p-1" : "absolute right-1 bottom-3 text-sm p-1"}
          style={{ transform: "rotate(320deg)" }}
        >
          $ {product.price}
        </p>
      </div>
      <p className="text-sm px-3 py-2" title={product.title}>
        {product && truncateText(product.title, 16)}
      </p>
      <button
        className={
          theme
            ? " py-1 m-2 border w-[90%] text-center rounded-2xl text-sm  border-gray-100 hover:text-white hover:border-orange-500 hover:bg-orange-500"
            : "py-1 m-2 border w-[90%] text-center rounded-2xl text-sm  border-gray-900 hover:text-white hover:border-orange-500 hover:bg-orange-500"
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
