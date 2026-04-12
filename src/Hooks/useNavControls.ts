import { useState } from "react";

export const useNavControls = <T>() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<T | null>(null);
  const [activeItem, setActiveItem] = useState<T | null>(null);

  const toggle = (): void => {
    setIsOpen(() => !isOpen);
  };

  const mouseEnter = (item: T): void => {
    setActiveMenu(item);
    setActiveItem(item);
  };

  const mouseLeave = (): void => {
    setActiveMenu(null);
    setActiveItem(null);
  };

  return { toggle, isOpen, activeItem, activeMenu, mouseEnter, mouseLeave };
};
