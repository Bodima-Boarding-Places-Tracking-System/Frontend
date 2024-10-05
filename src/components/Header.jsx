import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/user/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handlePostAd = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-[#003566] shadow-sm p-2">
      <Navbar className=" md:max-w-4xl md:mx-auto bg-transparent text-white">
        <div className="flex items-start md:items-center gap-2 md:gap-10">
          <NavbarToggle />
          <Link
            to={"/"}
            className="text-2xl font-medium"
            style={{ lineHeight: "1.5" }}
          >
            Bodima
          </Link>
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
              <Link to={"/about"}>About</Link>
            </NavbarLink>
            <NavbarLink
              className="text-gray-200 md:hover:text-yellow-300"
              as={"div"}
            >
              <Link to={"/contact"}>Contact</Link>
            </NavbarLink>
          </NavbarCollapse>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          {currentUser ? (
            <Dropdown
              arrowIcon={true}
              inline
              label={
                <div className="flex items-center gap-2">
                  <Avatar size={"sm"} alt="user" rounded />
                  <span className="hidden md:block text-sm">
                    Hi {currentUser.firstName}
                  </span>
                </div>
              }
            >
              <Link to={"/"}>
                <Dropdown.Item>My Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to={"/login"} className="flex items-center gap-2">
              <Avatar rounded size={"sm"} />
              <span>Login</span>
            </Link>
          )}

          {(!currentUser ||
            (currentUser && currentUser.role === "boarding-owner")) && (
            <Button
              className="rounded-lg bg-yellow-300 focus:ring-0 enabled:hover:bg-[#FFD60A] text-black"
              onClick={handlePostAd}
            >
              Post Your Ad
            </Button>
          )}
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
