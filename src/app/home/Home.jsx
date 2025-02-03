import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import data from "../../../data";
import ResourceCard from '../../components/card/ResourceCard.jsx';

function Home() {

  return (
    <div className="font-overusedgrotesk antialiased bg-bg section-padding  text-accent box-border">
      <Header />
      <main>
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-32">
          <h1 className=" text-display max-w-[20ch] text-center text-accent">
            Assorted resources{" "}
            <span className=" text-light-gray">
              for frontend developers and web designers.
            </span>
          </h1>
          <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
            Explore curated and handpicked goodies that enhance your workflow
            and cultivate your growth as a developer and designer.
          </p>
        </section>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {data.map((item, index) => (
            <ResourceCard key={item.id} name={item.name} tags={item.tags} category={item.category} src={item.src} />
        ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
