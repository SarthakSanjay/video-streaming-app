"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

const ProfileBtn = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session?.user?.image || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black flex items-center flex-col text-white relative bottom-8 right-14 py-2 px-3 gap-3">
        <DropdownMenuLabel>
          {session?.user?.name ? session.user.name : "Guest"}
        </DropdownMenuLabel>
        <Button
          className="bg-transparent text-green-500 border-green-500
          h-8 w-full hover:bg-green-500/35 hover:text-green-500"
          variant={"outline"}
          onClick={() => signIn()}
        >
          Signin
        </Button>
        <Button
          className="bg-transparent text-red-500 border-red-500
          h-8 w-full hover:bg-red-500/35 hover:text-red-500"
          variant={"outline"}
          onClick={() => signOut()}
        >
          Logout
        </Button>
        <ThemeToggle />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileBtn;
