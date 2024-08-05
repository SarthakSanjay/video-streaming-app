import Appbar from "../components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./lib/auth";
import Content from "@/components/Content";
import Signin from "@/components/Signin";
import LandingPage from "@/components/LandingPage";

async function getUserDetails(){
  const session = await getServerSession(NEXT_AUTH);

  return session
}

export default async function Home() {
  const session = await getUserDetails()

  if(session?.user){
    console.log(session?.user);
    return <div className="h-screen w-screen flex flex-col dark:bg-black">
    <Appbar />
    <Content />
  </div>
  }

  return (
    <div className="h-max w-screen flex flex-col dark:bg-black">
     <LandingPage />
    </div>
  );
}
