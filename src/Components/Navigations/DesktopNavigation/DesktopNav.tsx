import { CircleQuestionMark, CircleUser, Globe } from "lucide-react";
import DesktopNavUL from "./DesktopNavUL";
import { useNavControls } from "../../../Hooks/useNavControls";

const DesktopNav = () => {

  const {mouseLeave} = useNavControls()

  return (
    <div onMouseLeave={mouseLeave} className="sticky top-0 left-0 min-w-screen bg-white shadow-md z-10">
      <div className="boundiries flex items-center justify-between">
        <img
          src={"/src/assets/Tesla,_Inc.-Wordmark-Black-Logo.wine-cropped.svg"}
          alt="Telsa logo"
          className="max-w-29"
        />
        <div>
          <DesktopNavUL />
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <div className="icons-hover">
            <CircleQuestionMark />
          </div>
          <div className="icons-hover">
            <CircleUser />
          </div>
          <div className="icons-hover">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
