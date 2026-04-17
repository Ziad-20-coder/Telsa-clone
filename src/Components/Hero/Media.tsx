import type { HeroElement } from "../../Types/Hero";

const Media = ({
  item,
  isActive,
}: {
  item: HeroElement;
  isActive: boolean;
}) => {
  const decide = `${isActive ? "absolute inset-0 h-full w-full object-cover" : "hidden"}`;
  if (item.type === "video") {
    return (
      <video muted autoPlay loop className={decide}>
        <source src={item.src} />
      </video>
    );
  } else {
    return <img src={item.src} alt={item.title} className={decide} />;
  }
};

export default Media;
