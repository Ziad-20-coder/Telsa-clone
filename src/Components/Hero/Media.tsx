import type { HeroElement } from "../../Types/Hero";

const Media = ({
  item,
}: {
  item: HeroElement;
}) => {
  const decide = "absolute inset-0 h-full w-full object-cover";
  if (item.type === "video") {
    return (
      <video muted autoPlay loop className={decide}>
        <source src={item.src} />
      </video>
    );
  } else {
    return <img src={item.src} alt={item.header} className={decide} loading="lazy"/>;
  }
};

export default Media;
