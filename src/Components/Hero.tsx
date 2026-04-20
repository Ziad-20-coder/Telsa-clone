import { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import type { Hero } from "../Types/Hero";
import { AnimatePresence, motion } from "motion/react";
import Media from "./Hero/Media";
import { type Variants } from "motion/react";
import Dots from "./Hero/Dots";

const variant: Variants = {
  hidden: { opacity: 0 },

  visible: { opacity: 1, transition: {duration: 0.2} },

  exit: { opacity: 0 },
};

const url: string = "/src/data/Hero.json";

const Hero = () => {
  const [index, setIndex] = useState<number>(0);
  const { data, isLoading, error } = useFetch<Hero>(url);

  useEffect(() => {
    if (!data || !data.Hero) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data?.Hero.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data]);

  if (isLoading) return <p>Loading backGround</p>;
  if (error || !data) return <p>Failed to load backGround</p>;

  return (
    <div className="relative min-h-[80vh]">
      <AnimatePresence mode="wait">
        {data.Hero.map(
          (item, idx) =>
            index === idx && (
              <motion.div
                key={item.id}
                variants={variant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0"
              >
                <Media item={item} />
              </motion.div>
            ),
        )}
      </AnimatePresence>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex items-center gap-5">
        {data.Hero.map(( _ , idx) => (
          <Dots active={index === idx} index={idx} func={setIndex}/>
        ))}
      </div>
    </div>
  );
};

export default Hero;
