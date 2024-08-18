import React, { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

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
    <div className="mx-auto text-center pb-5 text-sm flex justify-center items-center">
      <button
        className="page-btn  px-2 py-2 m-2 bg-slate-300 rounded-s-lg hover:text-white"
        onClick={() => handleCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleDoubleLeft />
      </button>
      {generatePageNo().map((item) => {
        return (
          <button
            key={item}
            className={
              item == currentPage
                ? "active-btn bg-orange-500 text-white px-4 py-1 m-2"
                : "page-btn bg-slate-200 px-2 py-1 m-2"
            }
            value={item}
            onClick={() => handleCurrentPage(item)}
          >
            {item}
          </button>
        );
      })}
      <button
        className="page-btn px-2 py-2 m-2 bg-slate-300 rounded-e-lg hover:text-white"
        onClick={() => handleCurrentPage(currentPage + 1)}
        disabled={lengthofPages == currentPage}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default PaginationBar;
