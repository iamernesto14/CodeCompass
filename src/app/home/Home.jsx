import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import data from "../../../data";
import ResourceCard from "../../components/card/ResourceCard.jsx";
import TabButton from "../../components/TabNavigation/TabButton.jsx";
import TabButtonMobile from "../../components/TabNavigation/TabButtonMobile.jsx";

function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [...new Set(data.map((item) => item.category))];

  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = data.filter((item) => item.category === category).length;
    return acc;
  }, {});

  const filteredData =
    activeCategory === "all"
      ? data
      : data.filter((item) => item.category === activeCategory);

  return (
    <div className="font-overusedgrotesk antialiased bg-bg section-padding text-accent box-border">
      <Header />
      <main>
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-10">
          <h1 className="text-display max-w-[20ch] text-center text-accent">
            Assorted resources{" "}
            <span className="text-light-gray">
              for frontend developers and web designers.
            </span>
          </h1>
          <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
            Explore curated and handpicked goodies that enhance your workflow
            and cultivate your growth as a developer and designer.
          </p>
        </section>

        {/* Navigation Tab */}
        <TabButton
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categoryCount={categoryCount} 
        />
        <TabButtonMobile
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categoryCount={categoryCount} 
        />

        {/* Resource Cards */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {filteredData.map((item) => (
            <ResourceCard
              key={item.id}
              name={item.name}
              tags={item.tags}
              category={item.category}
              src={item.src}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
