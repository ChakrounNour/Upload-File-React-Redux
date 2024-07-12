import React from "react";
import { FaSearch } from "react-icons/fa";
import AtomButton from "../atoms/button/AtomButton";
import AtomInput from "../atoms/input/AtomInput";

function Search() {
  return (
    <>
      <div className="relative md:w-65">
        <label
          htmlFor="searchInput"
          className="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect(0,0,0,0) border-0"
        >
          Search
        </label>
        <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
          <AtomButton
            className="p-1 focus:outline-none text-white md:text-black"
            ariaLabel="Search"
          >
            <FaSearch />
          </AtomButton>
        </span>
        <AtomInput
          id="searchInput"
          type="text"
          className="w-full px-4 pl-12 rounded shadow outline-none hidden md:block"
        />
      </div>
    </>
  );
}

export default Search;
