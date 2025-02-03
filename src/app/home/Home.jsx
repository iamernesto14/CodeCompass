import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

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
      </main>
      <Footer />
    </div>
  )
}

export default Home
