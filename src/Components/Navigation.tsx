import DesktopNav from "./Navigations/DesktopNav";
import MobileNav from "./Navigations/MobileNavigation/MobileNav";

const Navigation = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navigation;
