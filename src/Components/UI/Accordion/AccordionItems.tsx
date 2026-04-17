import type { Variants } from "motion";
import { motion } from "motion/react";

interface AccordionItemsPorps {
  product: { id: number; title: string; image: string }[];
}

const variant: Variants = {
  hidden: { opacity: 0, x: -40, height: 0 },
  visible: {
    opacity: 1,
    x: 0,
    height: "auto",
    overflow: "hidden",
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      height: { duration: 0.2 },
    },
  },
  exit: {
    opacity: 0,
    x: -40,
    height: 0,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const variantItems: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const AccordionItems = ({ product }: AccordionItemsPorps) => {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-3 z-10"
    >
      {product.map((item) => (
        <motion.li
          variants={variantItems}
          key={item.id}
          layout
          className="first:mt-4 flex items-center gap-2"
        >
          <p>{item.title}</p>
          <img
            src={item.image}
            alt={item.title}
            className="max-h-30 w-40 object-cover"
          />
        </motion.li>
      ))}
    </motion.div>
  );
};

export default AccordionItems;
