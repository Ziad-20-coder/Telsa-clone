import { X } from "lucide-react";
import Accordion from "../../UI/Accordion/Accordion";

type MobileNavContentProps = {
  toggle: () => void;
};

const MobileNavContent = ({ toggle }: MobileNavContentProps) => {
  return (
    <div className="absolute top-0 left-0 min-h-screen min-w-full bg-white">
      <div className="boundiries flex items-center justify-end">
        <button onClick={toggle}>
          <X /> {/* close icon */}
        </button>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
};

export default MobileNavContent;
