import { useContext } from "react";
import { navContext } from "../Context/NavContext";

export const useNavControls = () => {
  const context = useContext(navContext)

  if(!context) throw new Error("failed to load context")

  return {
    toggle: context.toggle,
    isOpen: context.isOpen,
    activeMenu: context.activeMenu,
    activeItem: context.activeItem,
    mouseEnter: context.mouseEnter,
    mouseLeave: context.mouseLeave
  }
};
