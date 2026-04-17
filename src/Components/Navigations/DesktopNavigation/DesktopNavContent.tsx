import type { Variants } from "motion";
import { motion } from "motion/react";
import type { Charging } from "../../../Types/services";

interface DesktopNavContentProps {
  data: Charging[];
}

const variants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const variantItems: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const DesktopNavContent = ({ data }: DesktopNavContentProps) => {
  return (
    <div className="bg-white shadow-md absolute top-full left-0 min-w-full">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        className="grid grid-cols-3 gap-5 max-w-2/3 mx-auto mb-6"
      >
        {data.map((item) => (
          <motion.li key={item.id} variants={variantItems}>
            <img src={item.image} alt={item.title} className="h-46 m-auto" />
            <h3 className="text-center">{item.title}</h3>
          </motion.li>
        ))}
      </motion.div>
    </div>
  );
};

export default DesktopNavContent;
