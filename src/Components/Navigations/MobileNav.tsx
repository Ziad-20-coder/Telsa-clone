import { MenuIcon } from "lucide-react";

const MobileNav = () => {
  return (
    <div className="sticky top-0 left-0 min-w-full min-h-full bg-white shadow-md">
      <div className="boundiries flex items-center justify-between">
        {/* logo */}
        <img
          src={"/src/assets/Tesla,_Inc.-Wordmark-Black-Logo.wine-cropped.svg"}
          alt="Telsa logo"
          className="max-w-19"
        />
        {/* menu button */}
        <button>
          <MenuIcon strokeWidth={1.4}/>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
