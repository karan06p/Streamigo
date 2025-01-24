import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const LibraryPage = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default LibraryPage;
