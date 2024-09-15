import { Menu } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleShowMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }

  return (
    <div className="w-full sticky z-40 flex flex-col">
      <div className="bg-indigo-700 text-white p-4">
        <div className="md:max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <Menu className="md:hidden cursor-pointer"
              onClick={handleShowMobileMenu}
              />
              <Link className="font-medium text-2xl" to={"/"}>
                Logo
              </Link>
            </div>
            <div className="hidden md:flex">
              <nav className="flex gap-5">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
              </nav>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-2" to={"/login"}>
              <FaUserCircle size={20} />
              <span>Login</span>
            </Link>
            <button className="bg-yellow-400 hover:bg-yellow-300 font-medium rounded text-gray-800 px-6 py-3">
              Post an Ad
            </button>
          </div>
        </div>
      </div>
      {
        showMobileMenu && <MobileMenu />
      }
    </div>
  );
};

export default Header;
