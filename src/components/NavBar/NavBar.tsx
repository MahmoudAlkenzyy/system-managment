import { CiBellOn } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="flex items-center py-4 bg-white">
      <form className="w-full max-w-sm ms-auto px-10 gap-3 flex justify-around items-center">
        <label htmlFor="default-search" className=" text-sm font-medium text-gray-900 sr-only ">
          Search
        </label>
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
            <IoMdSearch color="lightgray" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 py-1 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search"
          />
        </div>
        <CiBellOn color="gray" size={22} />
      </form>
    </nav>
  );
};

export default NavBar;
