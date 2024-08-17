import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ handleSearch , products }) => {
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleSearch(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(search == ""){
    //   // alert("Please enter a search term");
    //   return; 
    // }else{

      
    
  };

  return (
    <div>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-4 border-2 px-4 rounded-3xl hover:border-black">
        <form className="flex justify-between items-center" onSubmit={handleSubmit}>
          <input
            type="search"
            name=""
            className="rounded-3xl p-2 flex-1  border-none outline-none"
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
          <button type="submit" className="px-4 ">
            <BiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
