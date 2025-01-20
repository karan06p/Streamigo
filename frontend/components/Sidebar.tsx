"use client"
import { cn } from "@/lib/utils";
import { Home, TrendingUp, Library, SubscriptIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Sidebar = () => {
  const sidebarRoutes = [
    {
      title: "Home",
      icon: <Home />,
      route: "/"
    },
    {
      title: "Trending",
      icon: <TrendingUp />,
      route: "/trending"
    },
    {
      title: "Subscriptions",
      icon: <SubscriptIcon />,
      route: "/subscription"
    },
    {
      title: "Library",
      icon: <Library />,
      route: "/library"
    },
    
  ]
  const pathname = usePathname()
  return (
    <div className="h-screen w-1/5 p-4 bg-black text-white">
      <ul>
        {
          sidebarRoutes.map((item,index) => (
            <Link href={item.route} key={index} className={cn("gap-2 mb-4 flex items-center cursor-pointer px-2 py-2 rounded-2xl ", pathname === item.route ? "bg-white text-black " : "hover:bg-gray-200/80 hover:text-black")}>
              {item.icon} {item.title}
            </Link>
          ))
        }
        
      </ul>
    </div>
  );
};

export default Sidebar;

// 