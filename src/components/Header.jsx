import {
  Avatar,
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <div className="w-full sticky bg-[#003566] border-b-2 p-2">
      <Navbar className=" md:max-w-4xl md:mx-auto bg-transparent text-white">
        <div className="flex items-start md:items-center gap-2 md:gap-10">
          <NavbarToggle />
          <Link to={"/"} className="text-2xl font-medium" style={{lineHeight:"1.5"}}>Bodima</Link>
          <NavbarCollapse className="hidden md:block">
            <NavbarLink
              className="text-gray-200 md:hover:text-yellow-300"
              as={"div"}
            >
              <Link to={"/"}>Home</Link>
            </NavbarLink>
            <NavbarLink
              className="text-gray-200 md:hover:text-yellow-300"
              as={"div"}
            >
              <Link to={"/"}>About</Link>
            </NavbarLink>
            <NavbarLink
              className="text-gray-200 md:hover:text-yellow-300"
              as={"div"}
            >
              <Link to={"/"}>Contact</Link>
            </NavbarLink>
          </NavbarCollapse>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <Link to={"/login"} className="flex items-center gap-2">
            <Avatar rounded size={"sm"} />
            <span>Login</span>
          </Link>
          <Button className="rounded bg-yellow-300 focus:ring-0 enabled:hover:bg-[#FFD60A] text-black">Post Your Ad</Button>
        </div>
        <NavbarCollapse className="md:hidden">
          <NavbarLink
            active={path === "/"}
            className={
              path === "/"
                ? "border-0 bg-yellow-300 hover:bg-[#FFD60A] text-gray-800 font-medium rounded"
                : "border-0 hover:bg-transparent text-gray-200"
            }
            as={"div"}
          >
            <Link to={"/"}>Home</Link>
          </NavbarLink>
          <NavbarLink
            active={path === "/about"}
            className={
              path === "/about"
                ? "border-0 bg-yellow-300 hover:bg-[#FFD60A] text-gray-800 font-medium rounded"
                : "border-0 hover:bg-transparent text-gray-200"
            }
            as={"div"}
          >
            <Link to={"/about"}>About</Link>
          </NavbarLink>
          <NavbarLink
            active={path === "/contact"}
            className={
              path === "/contact"
                ? "border-0 bg-yellow-300 hover:bg-[#FFD60A] text-gray-800 font-medium rounded"
                : "border-0 hover:bg-transparent text-gray-200"
            }
            as={"div"}
          >
            <Link to={"/contact"}>Contact</Link>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default Header;
