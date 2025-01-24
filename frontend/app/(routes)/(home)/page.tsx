"use client";

import HomePageVideos from "@/components/HomePageVideos";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  

  return (
    <div className="w-full ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <HomePageVideos />
      </div>
      </div>    
  );
}
