import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ handleSearch, products, theme }) => {
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
    
  };

  return (
    <div>
      <div
        className={
          theme
            ? "bg-slate-200 w-[97%] md:w-[94%] lg:w-[85%] mx-auto my-3 border-2 px-4 rounded-3xl hover:border-black"
            : "w-[97%] md:w-[94%] lg:w-[85%] mx-auto my-3 border-2 px-4 rounded-3xl hover:border-black"
        }
      >
        <form
          className="flex justify-between items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            name=""
            className={ theme ? "bg-slate-200 rounded-3xl p-2 flex-1  border-none outline-none" : "rounded-3xl p-2 flex-1  border-none outline-none"}
            placeholder="search item"
            id=""
            list="data"
            value={search}
            onChange={handleChange}
          />
          <datalist id="data">
            {products?.map((product) => (
              <option key={product.id} value={product.title} />
            ))}
          </datalist>
          <button type="submit" className="px-4 text-xl">
            <BiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
