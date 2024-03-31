import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";

function Header() {
  return (
    <header className="my-5">
      <div className="container grid grid-cols-4 grid-rows-1 -lg:grid-cols-3 -lg:w-full -lg:place-items-center -sm:grid-cols-2">
        <div>
          <h1 className="text-red text-xl font-bold">BookUsNow</h1>
          <p className="flex gap-2 items-center text-sm text-grey mt-5 cursor-pointer">
            <FaLocationDot />
            <span className="text-zinc-500">Mumbai, India</span>
            <MdOutlineKeyboardArrowRight />
          </p>
        </div>
        <div className="flex items-start gap-2 justify-start col-span-2 -lg:col-span-1 -lg:w-full -sm:hidden">
          <button className="bg-black text-white flex gap-3 items-center py-3 px-5 rounded-md -lg:hidden">
            <IoMenu className="text-xl" />
            <span className="text-sm">Categories</span>
          </button>
          <form className="block w-full rounded-md border-2	border-grey py-1.5 pr-4 text-gray-900 flex justify-between -lg:w-full -lg:pr-2">
            <input type="text" className="outline-none py-1 pl-4 text-sm" />
            <IoMdSearch className="text-2xl" />
          </form>
        </div>
        <div className="flex gap-3 text-sm self-start justify-center -lg:w-full -sm:items-center">
          <IoMdSearch className="text-2xl text-zinc-600 hidden -sm:block" />
          <button className="flex items-center gap-2 outline-none">
            <AiFillHeart className="text-grey text-xl" />
            <span className="-sm:hidden">Favorites</span>
          </button>
          <button className="border-2 border-grey rounded-md py-2 px-3">
            Sign In
          </button>
        </div>
      </div>
      <nav>
        <ul className="flex justify-center gap-8 text-sm cursor-pointer -sm:overflow-x-scroll -sm:gap-6 -sm:justify-start -sm:container -sm:mt-2 -sm:no-scroll-bar">
          <li>Live Shows</li>
          <li>Streams</li>
          <li>Movies</li>
          <li>Plays</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
