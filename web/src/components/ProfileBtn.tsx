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
import { signIn, signOut , useSession } from "next-auth/react";

const ProfileBtn = () => {
    const { data: session, status } = useSession();
    console.log(session);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session?.user?.image || ''} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black flex items-center flex-col text-white relative bottom-8 right-14">
        <DropdownMenuLabel>
            {session?.user?.name ? session.user.name : "Guest"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-none bg-black hover:bg-black">
          <Button
            className="bg-transparent text-green-500 border-green-500"
            variant={"outline"}
            onClick={() => signIn()}
          >
            Signin
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            className="bg-transparent text-red-500 border-red-500"
            variant={"outline"}
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileBtn;
