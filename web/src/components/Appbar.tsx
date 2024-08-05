"use client";
import { useRecoilValue } from "recoil";
import ProfileBtn from "./ProfileBtn";
import SearchBox from "./SearchBox";
import StreamingOptions from "./StreamingOptions";
import { searchBarAtom } from "@/store/atom";
import { Input } from "./ui/input";
import Explore from "./Explore";
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";

const Appbar = () => {
  const toggleSearchBar = useRecoilValue(searchBarAtom);
  const session = useSession();

  if (session.status === "loading") {
    return "";
  }

  if (session.status === "unauthenticated") {
    return (
      <div className="h-14 w-[80%] border-2 rounded-lg flex justify-between items-center px-5 sticky shadow-xl">
        <div className="text-xl font-semibold">VSA</div>
        <Button
          className="bg-black text-white hover:bg-black hover:scale-105 transition-all duration-300"
          variant={"default"}
          onClick={() => signIn()}
        >
          Signin
        </Button>
      </div>
    );
  }
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
