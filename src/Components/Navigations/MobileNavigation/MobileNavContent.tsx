import { X } from "lucide-react";
import Accordion from "../../UI/Accordion/Accordion";
import type { Variants } from "motion";
import { AnimatePresence, motion } from "motion/react";

type MobileNavContentProps = {
  toggle: () => void;
};

const variant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1, ease: "easeInOut" } },
  exit: { opacity: 0, transition: {duration: 0.15} },
};

const MobileNavContent = ({ toggle }: MobileNavContentProps) => {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-0 left-0 min-h-screen min-w-full bg-white z-10"
    >
      <div className="boundiries flex items-center justify-end">
        <button onClick={toggle}>
          <X /> {/* close icon */}
        </button>
      </div>
      <div>
        <AnimatePresence>
          <Accordion />
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MobileNavContent;
