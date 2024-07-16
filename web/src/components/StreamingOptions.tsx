import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { CiStreamOn } from "react-icons/ci";

const StreamingOptions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="h-10 w-10 text-3xl rounded-full flex justify-center items-center">
          <CiStreamOn />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black flex items-center flex-col text-white relative bottom-8 right-14">
        <DropdownMenuLabel>Streaming Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Upload Video</DropdownMenuItem>
        <DropdownMenuItem>Go Live</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StreamingOptions;
