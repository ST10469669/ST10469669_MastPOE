
import React, { createContext, useState, ReactNode, useContext } from "react";

export type MenuItem = {
  name: string;
  price: number;
  category: "main" | "dessert" | "drinks";
};

type MenuContextType = {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within a MenuProvider");
  return context;
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { name: "Steak", price: 250, category: "main" },
    { name: "Chicken", price: 100, category: "main" },
    { name: "Chocolate Cake", price: 70, category: "dessert" },
    { name: "Strawberry", price: 100, category: "dessert" },
    { name: "Coke", price: 40, category: "drinks" },
    { name: "Fanta", price: 35, category: "drinks" },
  ]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems(prev => [...prev, item]);
  };

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};
