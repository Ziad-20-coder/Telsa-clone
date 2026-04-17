import { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import type { Hero } from "../Types/Hero";
import Media from "./Hero/Media";

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
    <div className="relative min-h-[80vh] -z-40">
      {data.Hero.map((item) => (
        <Media item={item} isActive={index + 1 === item.id} />
      ))}
    </div>
  );
};

export default Hero;
