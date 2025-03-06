import React from "react";
import profile from "../../../public/images/profile.webp";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div className="font-overusedgrotesk antialiased bg-bg section-padding  text-accent box-border">
        <Header />
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12">
      
      <div className="text-display col-span-4">
        <h1 className="mb-8 lg:pl-8">
          About <span className="text-light-gray">CodeCompass</span>
        </h1>
      </div>
      <div className=" col-start-6 col-span-5 max-w-xl lg:max-w-none text-h5 md:text-h4  leading-[130%] text-dim-gray font-normal space-y-7">
        <p className="space-y-8 flex flex-col">
          <span>
            I created CodeCompass to address the frustrations I encountered when
            I started out in frontend development and web design. Hunting for
            resources and tools consumed a lot valuable time that could have
            been better spent honing my skills.{" "}
          </span>

          <span>
            Now CodeCompass exists to support those that have similar issues.
            These resources are handpicked and curated by me and other amazing
            contributors.
          </span>
        </p>
        <div className="flex items-center gap-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              className=" scale-150"
              placeholder="blur"
              src={profile}
              alt="profile headshot of Anokye "
            />
          </div>
          <div className="text-primary text-base xl:text-h6 2xl:text-h5 font-medium flex flex-col">
            <p className=" leading-tight">Ernest Anokye</p>
            {/* <Clipboard /> */}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
