import { ChevronRight } from "lucide-react";
import { useAccordion } from "../../../Hooks/useAccordion";
import { useFetch } from "../../../Hooks/useFetch";
import type { Services } from "../../../Types/services";
import AccordionItems from "./AccordionItems";
import type { Variants } from "motion";
import { AnimatePresence, motion } from "motion/react";

const url: string = "/src/data/services.json";

const variant: Variants = {
  hidden: { opacity: 0, x: -70, overflow: "hidden" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  exit: { opacity: 0, x: -70 },
};

const variantItems: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const Accordion = () => {
  const { data, isLoading, error } = useFetch<Services>(url);

  const { toggle, isOpen } = useAccordion();

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;
  if (!data) return null;

  return (
    <nav className="mt-6">
      <motion.ul
        variants={variant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="boundiries flex flex-col justify-center gap-10"
      >
        {Object.keys(data.megaContent)?.map((item) => (
          <motion.li
            key={item}
            variants={variantItems}
            layout
          >
            <div
              onClick={() => toggle(item)}
              className="flex items-center justify-between"
            >
              <h3>{item}</h3>
              <button>
                {item.length > 0 ? (
                  <ChevronRight
                    className={`transition-transform ${isOpen(item) ? "rotate-90" : ""}`}
                  />
                ) : null}
              </button>
            </div>
            <AnimatePresence>
              {isOpen(item) && (
                <AccordionItems
                  product={
                    data.megaContent[item as keyof typeof data.megaContent]
                  }
                />
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Accordion;
