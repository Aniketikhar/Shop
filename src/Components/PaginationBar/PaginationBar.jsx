import React, { useEffect, useState } from "react";
// import "./Pagination.css";

const PaginationBar = ({
  lengthOfData,
  itemPerPage,
  currentPage,
  handleCurrentPage,
  setCurrentPage,
}) => {
  const page = [];
const lengthofPages = Math.round(lengthOfData / itemPerPage);
  function generatePageNo() {
    for (let i = 1; i <= lengthofPages; i++) {
      page.push(i);
    }

    return page;
  }

  return (
    <div className="mx-auto text-center">
      <button
        className="page-btn p-2 m-2 bg-orange-500 "
        onClick={() => handleCurrentPage(currentPage - 1)}
        disabled={currentPage === 1} 
      >
        Prev
      </button>
      {generatePageNo().map((item) => {
        return (
          <button
            key={item}
            className={ item == currentPage ? "active-btn bg-orange-400 border py-2 px-4 m-2": "page-btn border py-2 px-4 m-2"}
            value={item}
            onClick={() => handleCurrentPage(item)}
          >
            {item}
          </button>
        ); // onClick function to change page state
      })}
      <button
        className="page-btn p-2 m-2 bg-orange-500"
        onClick={() => handleCurrentPage(currentPage + 1)}
        disabled={lengthofPages == currentPage }
      >
        Next 
      </button>
    </div>
  );
};

export default PaginationBar;
