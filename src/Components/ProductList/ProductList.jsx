import React, { useContext } from "react";
import Product from "../Product/Product";
import { shopContext } from "../../Context/Context";

const ProductList = () => {
  const { products, loading } = useContext(shopContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-5 flex flex-wrap justify-center">
        {products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <div className="text-center">hey there</div>
    </div>
  );
};

export default ProductList;
