
import React, { createContext, useState, ReactNode, useContext, Children } from "react";
// Define the structure of a menu item and the context type
export type MenuItem = {
  name: string;
  price: number;
  category: "main" | "dessert" | "drinks";
};

type MenuContextType = {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  deleteMenuItem?: (name: string) => void;
};
// Create the MenuContext
const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within a MenuProvider");
  return context;
};
// Provider component to manage menu state and provide context to people
export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { name: "Steak", price: 250, category: "main" },
    { name: "Chicken", price: 100, category: "main" },
    { name: "Chocolate Cake", price: 70, category: "dessert" },
    { name: "Strawberry", price: 100, category: "dessert" },
    { name: "Coke", price: 40, category: "drinks" },
    { name: "Fanta", price: 35, category: "drinks" },
  ]);
  // Function to add a new menu item
  const addMenuItem = (item: MenuItem) => {
    setMenuItems(prev => [...prev, item]);
  };
// Function to delete a menu item by name
  const deleteMenuItem = (name: string) => {
    setMenuItems(prev => prev.filter(item => item.name !== name));
  };
 
  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem, deleteMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};
