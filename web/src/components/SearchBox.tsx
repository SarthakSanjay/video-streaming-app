import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div className="w-1/3 flex h-11">
      <Input placeholder="Search" className="hidden md:block rounded-l-full h-full" />
      <Button
        variant={"outline"}
        className="bg-black text-white md:rounded-r-full h-full text-3xl md:border-l-0"
      >
        <FiSearch />
      </Button>
    </div>
  );
};

export default SearchBox;
