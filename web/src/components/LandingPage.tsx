"use client";
import React, { useState } from "react";
import Appbar from "./Appbar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-screen bg-white text-black flex flex-col items-center p-10 overflow-y-scroll overflow-x-hidden">
      <Appbar />
      <div className="h-max w-full flex flex-col justify-center items-center  py-10 my-5 gap-5">
        <AnimatedText />
        <div className="text-sm md:text-xl font-semibold text-gray-500">
          TechStack used Next.js, Next-Auth, AWS, Docker{" "}
        </div>
        <div className="h-14 w-[200px] border-[4px] rounded-lg">
          <Button
            onClick={() => {
              router.push("/signin");
            }}
            variant={"default"}
            className="h-14 w-[200px] text-sm md:text-xl bg-black text-white hover:bg-black -translate-y-4 translate-x-3 transition-all delay-100 hover:translate-x-1 hover:-translate-y-3"
          >
            Get Started
          </Button>
        </div>
        <div className=" md:w-[80%] relative">
          <img src="./main.png" className="w-full rounded-xl" />
          <img
            src="./phone2.png"
            className="w-[80%] absolute bottom-[-25%] right-[-35%]"
          />
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;

function AnimatedText() {
  const [animatedText] = useState([
    "V",
    "i",
    "d",
    "e",
    "o",
    " ",
    "S",
    "t",
    "r",
    "e",
    "a",
    "m",
    "i",
    "n",
    "g",
    " ",
    "A",
    "p",
    "p",
  ]);
  return (
    <>
      <div className="hidden w-full text-[70px] font-bold md:flex  justify-center items-center">
        {animatedText.map((i) => {
          if (i === " ") {
            return <span className="w-[25px]"></span>;
          }
          return (
            <span className="cursor-pointer  transition-all ease-in-out delay-100 hover:-translate-y-5 hover:scale-110 hover:text-red-500 duration-300">
              {i}
            </span>
          );
        })}
      </div>
      <div className="md:hidden text-[40px] font-bold">Video Streaming App</div>
    </>
  );
}

function LandingFooter() {
  return (
    <div className="h-14 w-full flex justify-center items-center">
      <h1 className="text-xl w-max">
        Made by{" "}
        <a href="https://x.com/SarthakSanjay01" className="text-green-500 cursor-pointer">
          <span>Sarthak Sanjay</span>
        </a>
      </h1>
    </div>
  );
}
