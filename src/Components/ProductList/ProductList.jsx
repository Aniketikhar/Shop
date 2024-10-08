import React, { useContext, useState } from "react";
import Product from "../Product/Product";
import PaginationBar from "../PaginationBar/PaginationBar";
import Loading from "../Loading/Loading";

const ProductList = ({ products, loading, theme, userEmail }) => {
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

  return (
    <div>
      <div
        className={
          theme
            ? " text-white w-[97%] md:w-[94%] lg:w-[85%] mx-auto py-2 flex flex-wrap justify-center"
            : "w-[97%] md:w-[94%] lg:w-[85%] mx-auto py-2 flex flex-wrap justify-center"
        }
      >
        {currentListOfItems.length === 0 && (
          <div className="text-center">No products found.</div>
        )}
        {currentListOfItems?.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              theme={theme}
              userEmail={userEmail}
            />
          );
        })}
      </div>
      {
      products.length > 8 && 
        <PaginationBar
          lengthOfData={lengthOfData}
          itemPerPage={itemPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleCurrentPage={handleCurrentPage}
        />
      }
    </div>
  );
};

export default ProductList;
