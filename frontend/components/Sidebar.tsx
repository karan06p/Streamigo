import { Home, TrendingUp, Library, SubscriptIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar w-3/5 p-4 bg-black text-white">
      <ul>
        <li className="mb-4 flex items-center">
          <Home className="mr-2" /> Home
        </li>
        <li className="my-6 flex items-center">
          <TrendingUp className="mr-2" /> Trending
        </li>
        <li className="my-6 flex items-center">
          <SubscriptIcon className="mr-2" /> Subscriptions
        </li>
        <li className="my-6 flex items-center">
          <Library className="mr-2" /> Library
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;