import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GoHome } from "react-icons/go";
import { IoChevronBackOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
const Explore = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="h-10 w-10 bg-transparent text-3xl p-0 border-0"
          variant="outline"
        >
          <RxHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-[300px] dark:bg-gray-950 text-white py-2 px-5"
      >
        <SheetHeader>
          <SheetClose asChild>
            <Button
              className="h-10 w-10 absolute bg-black text-3xl p-0 right-[-7%] border"
              variant="outline"
            >
              <IoChevronBackOutline />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="h-full w-full flex items-center flex-col gap-2">
          <h1>VSA</h1>
          <Button
            className="px-3 w-full h-10 flex gap-3 text-lg justify-start bg-gray-700 hover:bg-gray-900 dark:text-white">
            <span className="text-2xl">
              {" "}
              <GoHome />
            </span>
            Home
          </Button>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Explore;
