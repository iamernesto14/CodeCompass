import React from "react";
import { FooterTitle } from "../SVGs/FooterTitle";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  const links = [
    { id: 1, href: "/about", label: "About", isInternal: true },
    { id: 2, href: "https://forms.gle/wTuZ6E77pF4chHGL7", label: "Add a resource", isExternal: true },
    { id: 3, href: "https://forms.gle/jC8GQEPDgdUBbzpB6", label: "Submit feedback", isExternal: true },
    { id: 4, href: "https://ko-fi.com/iamernesto14", label: "Support this project", isExternal: true },
    { id: 5, href: "https://github.com/iamernesto14/CodeCompass", label: "Contribute on Github", isExternal: true },
    { id: 6, href: "/legal", label: "Legal", isInternal: true },
  ];

  return (
    <footer className="mt-32 sm:mb-0">
      <div className="border-b border-b-dim-gray md:pb-6">
        <span className="sr-only">CODECOMPASS</span>
        <FooterTitle />
      </div>

      <div className="flex flex-col gap-y-12 gap-x-2 md:flex-row items-start justify-between pt-6 pb-10 text-text">
        <div className="gap-y-10 b-8 flex flex-col text-base xl:text-h6 2xl:text-h5">
          <div className="flex w-56 gap-x-1 xl:w-96 ">
            <span className="w-fit flex-nowrap whitespace-nowrap">Made & Curated by{" "}</span>
            <a
              className="font-bold relative overflow-y-hidden w-full group h-fit"
              target="_blank"
              href="https://iamernesto14.github.io/anokye/"
              rel="noopener noreferrer"
            >
              <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                Anokye
              </span>
              <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap">
                Anokye :)
              </span>
            </a>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.id} className="flex w-fit group text-base xl:text-h7 2xl:text-h6">
                {link.isInternal ? (
                  <Link to={link.href} className="group">
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    {link.label}
                  </a>
                )}
                <span className="relative overflow-hidden h-fit w-fit">
                  <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                  <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
