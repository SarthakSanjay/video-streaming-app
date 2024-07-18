"use client";
import { useRecoilValue } from "recoil";
import ProfileBtn from "./ProfileBtn";
import SearchBox from "./SearchBox";
import StreamingOptions from "./StreamingOptions";
import { searchBarAtom } from "@/store/atom";
import { Input } from "./ui/input";
import Explore from "./Explore";

const Appbar = () => {
  const toggleSearchBar = useRecoilValue(searchBarAtom);

  return (
    <div>
      {toggleSearchBar ? (
        <Input
          placeholder="Search"
          className="hidden md:block rounded-l-full h-full"
        />
      ) : (
        <div className="h-14 w-full border-b flex py-2 px-5 justify-between dark:text-white items-center dark:bg-black">
          <div className="flex items-center gap-3">
            <Explore />
            <div>video streaming app</div>
          </div>
          <SearchBox />
          <div className="flex gap-6">
            <StreamingOptions />
            <ProfileBtn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Appbar;
