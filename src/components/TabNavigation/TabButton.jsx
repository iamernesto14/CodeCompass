import React from "react";
import { motion } from "framer-motion";

function TabButton({
  categories,
  activeCategory,
  setActiveCategory,
  categoryCount,
}) {
  return (
    <div className="mb-8 sticky top-6 z-50 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex">
      {/* Filtering button for "All" category */}
      <button
        aria-label="All categories"
        onClick={() => setActiveCategory("all")}
        className={`py-2 px-4 flex gap-x-1 font-medium items-center border border-dim-gray rounded-xl hover:border-text transition-all text-sm xl:text-h6 ${
          activeCategory === "all" ? "bg-accent text-bg" : "bg-bg text-accent"
        }`}
      >
        All
      </button>

      <div className="flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
        {categories.map((category) => (
          <div key={category} className="relative">
            <button
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-5 flex gap-x-1 font-medium rounded-xl transition-all relative ${
                activeCategory === category ? "" : "hover:text-gray"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  layoutId="active"
                  className="absolute inset-0 bg-accent rounded-xl"
                />
              )}
              <span className="text-sm xl:text-h6 relative mix-blend-exclusion z-10">
                {category}
              </span>
              <span className="flex relative justify-center mix-blend-exclusion z-10 items-center text-light-gray text-xxs xl:text-xs 2xl:text-sm leading-none">
                {categoryCount[category] || 0}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabButton;
