import { CircleQuestionMark, CircleUser, Globe } from "lucide-react";
import { useFetch } from "../../../Hooks/useFetch";
import type { Services } from "../../../Types/services";

const DesktopNav = () => {
  const url: string = "/src/data/services.json";

  const { data, isLoading, error } = useFetch<Services>(url);

  if (isLoading) return <h1>Loading Content</h1>;
  if (error) return <h1>Failed to load content</h1>;
  if (!data) return null;

  return (
    <div className="sticky top-0 left-0 min-w-screen bg-white shadow-md">
      <div className="boundiries flex items-center justify-between">
        <img
          src={"/src/assets/Tesla,_Inc.-Wordmark-Black-Logo.wine-cropped.svg"}
          alt="Telsa logo"
          className="max-w-29"
        />
        <ul className="flex items-center justify-center gap-8">
          {Object.keys(data.megaContent)?.map((item) => (
            <li key={item} className="cursor-pointer">
              <h3 className="icons-hover">{item}</h3>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-2">
          <div className="icons-hover">
            <CircleQuestionMark />
          </div>
          <div className="icons-hover">
            <CircleUser />
          </div>
          <div className="icons-hover">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
