import { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import type { Hero } from "../Types/Hero";
import { AnimatePresence, motion } from "motion/react";
import Media from "./Hero/Media";
import { type Variants } from "motion/react";
import Dots from "./Hero/Dots";
import { ChevronLeft, ChevronRight } from "lucide-react";

const variant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0 },
};

const url: string = "/src/data/Hero.json";

const Hero = () => {
  const [index, setIndex] = useState<number>(0);
  const { data, isLoading, error } = useFetch<Hero>(url);

  const totalSlides = data?.Hero.length ?? 0;

  useEffect(() => {
    if (!totalSlides) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  if (isLoading) return <p>Loading background...</p>;
  if (error || !data) return <p>Failed to load background</p>;

  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      <AnimatePresence mode="sync">
        {data.Hero.map(
          (item, idx) =>
            index === idx && (
              <motion.div
                key={item.id}
                variants={variant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 pointer-events-none z-10"
              >
                <Media item={item} />
                
                <div className="boundiries absolute inset-0">
                  <div className="flex flex-col items-center gap-1 mt-9 pointer-events-auto">
                    <h1 className="max-w-[70vw] text-center">
                      <span className="text-white text-3xl font-bold">
                        {item.header}
                      </span>
                    </h1>
                    <a href="#" className="z-20 -mt-1 lg:mt-1">
                      <span className="text-white underline">
                        {item.subHeader}
                      </span>
                    </a>
                    
                    <div className="boundiries min-w-full flex justify-center gap-3 lg:mt-1.5">
                      <button className="primary-btn flex-1 cursor-pointer md:max-w-[30vw] lg:max-w-[12vw]">
                        <span className="text-white text-sm">{item.mainBTN}</span>
                      </button>
                      <button className="secondary-btn flex-1 cursor-pointer md:max-w-[30vw] lg:max-w-[12vw]">
                        <span className="text-black text-sm">{item.subBTN}</span>
                      </button>
                    </div>
                  </div>

                  <div className="absolute inset-0 hidden lg:flex items-center justify-between pointer-events-none px-4">
                    <button 
                      onClick={() => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides)} 
                      className="bg-white/60 p-2 rounded-md cursor-pointer pointer-events-auto hover:bg-white transition-colors"
                    >
                      <ChevronLeft />
                    </button>
                    <button 
                      onClick={() => setIndex((prev) => (prev + 1) % totalSlides)} 
                      className="bg-white/60 p-2 rounded-md cursor-pointer pointer-events-auto hover:bg-white transition-colors"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 flex items-center gap-5 z-50">
        {data.Hero.map((_, idx) => (
          <Dots key={idx} active={index === idx} index={idx} func={setIndex} />
        ))}
      </div>
    </div>
  );
};

export default Hero;