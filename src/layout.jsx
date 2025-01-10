import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar";
import MobileMenu from "./components/MobileMenu";
import { useIsMobile } from "./hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <SidebarProvider className="flex flex-col min-h-screen">
        {isMobile && <MobileMenu />}
        <Outlet />
      </SidebarProvider>
    </>
  );
};

export default Layout;
