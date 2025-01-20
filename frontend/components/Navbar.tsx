"use client";
import { Bell, Menu, Mic, Plus, Search } from "lucide-react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

// TODOS:-
// 1. Add functionality of toggling sidebar by clicking menu icon

const Navbar = () => {
  return (
    <nav className="h-16 px-8 bg-black text-white flex justify-between items-center w-full">
      <div className="flex justify-start gap-8 items-center w-1/5">
        <Menu className="hover:bg-gray-200/60"/> <Image src={logo} alt="logo" width={115} height={115} /> 
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

        <Mic className="bg-gray-100 mx-4 text-black h-12 w-auto text-sm p-3 rounded-full border" />
      </div>
      <div className="w-1/5 flex justify-center gap-8 items-center">
        <div className="bg-gray-100/50 rounded-3xl flex justify-center items-center p-2">
          <Plus />  
          Create 
        </div>
        
        <Bell />
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
