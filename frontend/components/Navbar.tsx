"use client";
import { Bell, Menu, Mic, Plus, Search } from "lucide-react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// TODOS:-
// 1. Add functionality of toggling sidebar by clicking menu icon

const Navbar = () => {
  const router = useRouter()
  const [isCreateClicked, setIsCreateClicked] = useState<boolean>(false)
  return (
    <nav className="h-16 px-8 bg-black text-white flex justify-between items-center w-full">
      <div className="flex justify-start gap-8 items-center w-1/5">
        <Menu className="hover:bg-gray-200/60 cursor-pointer"/> <Link href={"/"}><Image src={logo} alt="logo" width={115} height={115} /></Link>
      </div>
      <div className=" flex justify-center items-center w-3/5">
        <div className="w-2/4 flex items-center justify-center">
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-l-3xl px-5 outline-none h-12 border-r-2 text-black text-lg border"
          />
          <button className="bg-gray-100 border-r text-black p-3 h-12 rounded-r-3xl">
            <Search />
          </button>
        </div>

        <Mic className="cursor-pointer bg-gray-100 mx-4 text-black h-12 w-auto text-sm p-3 rounded-full border" />
      </div>
      <div className="w-1/5 flex justify-center gap-8 items-center relative">
        <div
          className="bg-gray-100/50 rounded-3xl flex justify-center items-center p-2 cursor-pointer"
          onClick={() => setIsCreateClicked(!isCreateClicked)}
        >
          <Plus /> Create
        </div>
        {isCreateClicked && (
          <div className="absolute top-12 z-10 left-0 bg-gray-200 text-black rounded-md shadow-lg p-2">
            <div className="flex flex-col gap-2">
              <Link href={"/upload"} className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">Upload Video</Link>
              <Link href={"/go-live"} className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">Go Live</Link>
              <Link href={"/create-post"} className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">Create Post</Link>
            </div>
          </div>
        )}
        
        <Bell className="cursor-pointer"/>
        {/* <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Sign In</AvatarFallback>
        </Avatar> */}
        <Link href={"/auth/sign-in"} className="outline text-white p-2 rounded-3xl">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
