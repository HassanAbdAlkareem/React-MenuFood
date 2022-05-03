import React, { useState } from "react";
import items from "./Data";
import Menu from "./Menu";
import Categories from "./Categories";
import "./App.css";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (categories) => {
    if (categories === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === categories);
    setMenuItems(newItem);
  };

  return (
    <div className="app">
      <div className="container">
        <diV className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </diV>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </div>
    </div>
  );
}

export default App;
