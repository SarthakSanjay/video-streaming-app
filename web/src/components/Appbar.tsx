"use client";
import { useRecoilValue } from "recoil";
import ProfileBtn from "./ProfileBtn";
import StreamingOptions from "./StreamingOptions";
import { searchBarAtom } from "@/store/atom";
import { Input } from "./ui/input";
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Appbar = () => {
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
    <div className="h-14 w-full border-white border-0 flex justify-center items-center">
      <div className="h-14 w-2/3 ml-[250px] border-0 border-white rounded-2xl flex gap-4 justify-center items-center justify-self-center bg-black/25 dark:text-white dark:bg-white/25 px-5">
        <Search />
        <Input placeholder="search" className="border-0 h-10 shadow-none w-full outline-none focus-visible:ring-0" />
      </div>
      <div className="ml-[100px] flex gap-5">
        <StreamingOptions />
        <ProfileBtn />
      </div>
    </div>
  );
};

export default Appbar;
