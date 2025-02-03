import React from "react";
import profile from "../../../public/images/profile.webp";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Legal() {
  return (
    <div className="font-overusedgrotesk antialiased bg-bg section-padding h-full  text-accent box-border">
        <Header />
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12">
      
      <div className="text-display col-span-4">
        <h1 className="mb-8 lg:pl-8">
          Legal <span className="text-light-gray">Info</span>
        </h1>
      </div>
      <div className=" col-start-6 col-span-5 max-w-xl lg:max-w-none text-h5 md:text-h4 leading-[130%] text-light-gray font-medium space-y-7">
        <p className="space-y-8 flex flex-col">
          <span>
            This website use Google Analytics to analyze traffic and the usage
            to improve its performance and user experience. No personal
            information is collected.
          </span>

          <span>
            All trademarks, logos, brand and company names are the property of
            their respective owners.
          </span>

          <span>
            Some are affiliate links. I receive a small commission when you
            purchase or sign up through the links, at no extra cost for you.
          </span>
        </p>
        <div className="flex items-center gap-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              className=" scale-150"
              placeholder="blur"
              src={profile}
              alt="profile headshot of Ernest Anokye "
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

export default Legal;
