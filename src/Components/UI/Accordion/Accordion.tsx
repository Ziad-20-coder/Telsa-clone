import { ChevronRight } from "lucide-react";
import { useAccordion } from "../../../Hooks/useAccordion";
import { useFetch } from "../../../Hooks/useFetch";
import type { Services } from "../../../Types/services";
import AccordionItems from "./AccordionItems";

const url: string = "/src/data/services.json";

const Accordion = () => {
  const { data, isLoading, error } = useFetch<Services>(url);

  const { toggle, isOpen } = useAccordion();

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;
  if (!data) return null;

  return (
    <nav className="mt-6">
      <ul className="boundiries flex flex-col justify-center gap-10">
        {Object.keys(data.megaContent)?.map((item) => (
          <li key={item}>
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
            {isOpen(item) && (
              <AccordionItems product={data.megaContent[item as keyof typeof data.megaContent]} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Accordion;
