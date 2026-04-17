import { AnimatePresence } from "motion/react";
import { useFetch } from "../../../Hooks/useFetch";
import { useNavControls } from "../../../Hooks/useNavControls";
import { type Services } from "../../../Types/services";
import DesktopNavContent from "./DesktopNavContent";

const url: string = "/src/data/services.json";

const DesktopNavUL = () => {
  const { data, isLoading, error } = useFetch<Services>(url);

  const { mouseEnter, activeMenu, activeItem } = useNavControls();

  if (isLoading) return <h1>Loading Content</h1>;
  if (error || !data) return <h1>Failed to load content</h1>;

  return (
    <nav>
      <ul
        className="flex items-center gap-10"
      >
        {Object.entries(data.megaContent).map(([key, value]) => (
          <li
            key={key}
            onMouseEnter={() => mouseEnter(value)}
            className="icons-hover"
          >
            <h3>{key}</h3>
          </li>
        ))}
        <AnimatePresence>
          {activeMenu && activeItem && <DesktopNavContent data={activeMenu} />}
        </AnimatePresence>
      </ul>
    </nav>
  );
};

export default DesktopNavUL;
