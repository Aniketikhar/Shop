import React, { useContext, useState } from "react";
import Product from "../Product/Product";
import { shopContext } from "../../Context/Context";
import PaginationBar from "../PaginationBar/PaginationBar";
import Loading from "../Loading/Loading";

const ProductList = ({ products, loading }) => {
  if (loading) {
    return <Loading />;
  }

  const itemPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const lengthOfData = products?.length;

  function handleCurrentPage(cPage) {
    if (cPage > 0 && cPage < 9) setCurrentPage(cPage);
  }

  const lastItem = currentPage * itemPerPage;
  const firstItem = lastItem - itemPerPage;
  const currentListOfItems = products?.slice(firstItem, lastItem);
  console.log("current list", currentListOfItems);

  return (
    <div>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-2 flex flex-wrap justify-center">
        {currentListOfItems?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <PaginationBar
        lengthOfData={lengthOfData}
        itemPerPage={itemPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleCurrentPage={handleCurrentPage}
      />
    </div>
  );
};

export default ProductList;
