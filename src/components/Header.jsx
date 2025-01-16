import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-custom bg-white md:bg-[white]">
      <div className="max-w-6xl mx-auto py-4 px-8 lg:px-6">
        <div className="flex justify-between items-center">
          <div className="text-[1.75rem] font-bold">
            Bodima.<span className="text-primary-500">lk</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link to={"/"}>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link to={"/sign-in"}>Sign In</Link>
            <Button size="">Post Your Ad</Button>
          </div>
          <SidebarTrigger className="md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
