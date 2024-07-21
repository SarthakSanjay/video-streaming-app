"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSetRecoilState } from "recoil";
import { searchBarAtom } from "@/store/atom";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  const setToggleSearchBar = useSetRecoilState(searchBarAtom);
  return (
    <div className="w-1/3 flex h-11">
      <Input
        placeholder="Search"
        className="hidden md:block rounded-l-full h-full focus:border-orange-500"
      />
      <Button
        onClick={() => setToggleSearchBar((p) => !p)}
        variant={"outline"}
        className="bg-black text-white md:rounded-r-full h-full text-3xl md:border-l-0"
      >
        <CiSearch />
      </Button>
    </div>
  );
};

export default SearchBox;
