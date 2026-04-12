import { MenuIcon } from "lucide-react";
import { useNavControls } from "../../../Hooks/useNavControls";
import MobileNavContent from "../MobileNavigation/MobileNavContent";

const MobileNav = () => {
  const { isOpen, toggle } = useNavControls();
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
        <button onClick={toggle}>
          <MenuIcon strokeWidth={1.4} />
        </button>
      </div>
      {/* Content nav condition */}
      {isOpen && <MobileNavContent toggle={toggle} />}
    </div>
  );
};

export default MobileNav;
