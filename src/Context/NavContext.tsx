import { createContext, type ReactNode, useState } from "react";

interface navContextTypes {
  isOpen: boolean;
  activeMenu: any;
  activeItem: any;
  toggle: () => void;
  mouseEnter: (item: any) => void;
  mouseLeave: () => void;
}

export const navContext = createContext<navContextTypes | undefined>(undefined);

export const NavContext = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<any | null>(null);
  const [activeItem, setActiveItem] = useState<any | null>(null);

  const toggle = (): void => {
    setIsOpen(() => !isOpen);
  };

  const mouseEnter = (item: any): void => {
    setActiveMenu(item);
    setActiveItem(item);
  };

  const mouseLeave = (): void => {
    setActiveMenu(null);
    setActiveItem(null);
  };
  return (
    <navContext.Provider
      value={{ isOpen, activeItem, activeMenu, mouseEnter, mouseLeave, toggle }}
    >
      {children}
    </navContext.Provider>
  );
};

export default NavContext;
