import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoPlus } from "react-icons/go";

function TabNavigationMobile({
  categories,
  activeCategory,
  setActiveCategory,
  categoryCount,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-center gap-x-2 gap-y-2 sm:hidden z-50">
      {/* Main Category Button */}
      <button
        onClick={handleToggleDropdown}
        className={`py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between ${
          activeCategory === "all" ? " text-accent" : ""
        }`}
      >
        {activeCategory === "all" ? "All" : activeCategory}
        <span>
          <GoPlus />
        </span>
      </button>

      {/* Category Dropdown */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 right-0 border border-dim-gray bg-dark-charcoal p-4 m-4 flex rounded-md flex-col gap-y-2">
          {/* "All" category button */}
          <button
            onClick={() => {
              setActiveCategory("all");
              setIsOpen(false);
            }}
            className={`py-4 px-4 flex gap-x-1 font-medium rounded border border-transparent hover:border-dim-gray transition-all text-sm ${
              activeCategory === "all"
                ? "bg-accent text-bg"
                : "bg-bg text-accent"
            }`}
          >
            All
          </button>

          {/* Other Category Buttons */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setIsOpen(false);
              }}
              className={`py-4 px-4 flex gap-x-1 font-medium rounded border border-transparent hover:border-dim-gray transition-all text-sm relative ${
                activeCategory === category
                  ? "text-bg bg-accent"
                  : "bg-bg text-accent"
              }`}
            >
              <span className="text-sm">{category}</span>
              <span
                className={`flex justify-center items-center ${
                  activeCategory === category ? "text-bg" : "text-text"
                } text-xxs leading-none`}
              >
                {categoryCount[category] || 0}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default TabNavigationMobile;
