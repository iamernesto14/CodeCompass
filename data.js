// data.js
import adobefonts from "./src/assets/images/adobefonts.webp";
import aceternity from "./src/assets/images/aceternity.webp"
import astro from "./src/assets/images/astro.webp"
import arnauros from "./src/assets/images/arnau.webp"
import blender from "./src/assets/images/Blender.webp"
import awwwards from "./src/assets/images/awwwards.webp"
import atipo from "./src/assets/images/atipo.webp"
import artdedicated from "./src/assets/images/artdirected.webp"
import coursera from "./src/assets/images/coursera.webp"
import utopia from "./src/assets/images/utopia__2_.webp"
import screen from "./src/assets/images/screen_studio-2.webp"
import figma from "./src/assets/images/Figma__2_.webp"
import codrop from "./src/assets/images/codrops.webp"
import curatedesign from "./src/assets/images/curateddesign.webp"
import cotype from "./src/assets/images/cotype_Foundry_Favicon.webp"
import easings from "./src/assets/images/easings.webp"
import darkmode from "./src/assets/images/darkmodedesign.webp"
import domestika from "./src/assets/images/domestika.webp"
import coolstuff from "./src/assets/images/doingcoolstuff.webp"
const data = [
    {
      id: 1,
      name: "Aceternity",
      url: "https://ui.aceternity.com/",
      category: "Tools",
      tags: ["Animation", "Frontend", "Library"],
      src: aceternity,
      description: "Premade UI Components built with Next.js, Tailwindcss & Framer Motion. Copy paste the most trending components and use them in your websites without having to worry about styling and animations."
    },
    {
      id: 2,
      name: "Adobe Font",
      url: "https://fonts.adobe.com/",
      category: "Typography",
      src: adobefonts,
      tags: ["Assets", "Web design"],
      description: "Adobe Fonts partners with the world’s leading type foundries to bring thousands of beautiful fonts to designers every day. No need to worry about licensing, and you can use fonts from Adobe Fonts on the web or in desktop applications."
    },
    {
      id: 3,
      name: "Arnau Ros",
      url: "https://www.youtube.com/c/arnauros",
      category: "TY Channels",
      src: arnauros,
      tags: ["Freelancer", "Learning", "Web Design"],
      description: "Videos about Web Design, Webflow, Freelancing, and No Code."
    },
    {
      id: 4,
      name: "Art Directed Mockups",
      url: "https://artdirected.design/",
      category: "Tools",
      tags: ["Assets", "Mockups"],
      src: artdedicated,
      description: "Thoughtfully crafted, realistic, premium mockups that do not look like everything else. Improve your branding presentations, social media presence and delight your clients. All mockups have real shadows, beautiful art directed scenes and urban scenarios and are over 5000px. Art Directed is a design resources company."
    },
    {
      id: 5,
      name: "Astro",
      url: "https://astro.build/",
      category: "Technologies",
      src: astro,
      tags: ["Framework", "Frontend"],
      description: "The web framework for content-driven websites. Astro powers the world's fastest websites, client-side web apps, dynamic API endpoints, and everything in-between."
    },
    {
      id: 6,
      name: "Atipo Foundry",
      url: "https://www.atipofoundry.com/",
      category: "Typography",
      src: atipo,
      tags: ["Assets", "Web Design"],
      description: "An independent digital typeface foundry and graphic design studio."
    },
    {
      id: 7,
      name: "Awward",
      url: "https://www.awwwards.com/",
      category: "Inspiration",
      src: awwwards,
      tags: ["Frontend", "web design", "UI/UX"],
      description: "Awwwards showcase and award websites that demonstrate exceptional design, innovation, and user experience. The platform features a collection of websites that are evaluated by a panel of judges based on criteria such as design, creativity, usability, and content."
    },
    {
      id: 8,
      name: "Blender",
      url: "https://www.blender.org/",
      category: "Tools",
      tags: ["3D", "Animation"],
      src: blender,
      description: "Blender is a free and open-source 3D computer graphics software tool set used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games."
    },
    {
      id: 9,
      name: "Cousera",
      url: "https://www.coursera.org/",
      category: "Upskilling",
      tags: ["Learning", "Online Courses"],
      src: coursera,
      description: "Learn new job skills in online courses from industry leaders like Google, IBM, & Meta. Advance your career with top degrees from Michigan, Penn, Imperial & more."
    },
    {
      id: 10,
      name: "Clamp Calculator",
      url: "https://utopia.fyi/clamp/calculator/?a=320,1440,32%E2%80%9480",
      category: "Upskilling",
      tags: ["Frontend", "Optimization"],
      src: utopia,
      description: "Utopia emerges when designers and developers share a systematic approach to fluidity in responsive design. Instead of designing for x number of arbitrary breakpoints, we can design a system within which elements scale proportionally and fluidly."
    },
    {
      id: 11,
      name: "CleanShot X",
      url: "https://cleanshot.com/",
      category: "Tools",
      tags: ["Screen Recoding"],
      src: screen,
      description: "CleanShot X is the best screenshot and screen recording app for Mac with a built-in annotation tool, Cloud uploading, scrolling capture, and a lot more."
    },
    {
      id: 12,
      name: "Figma",
      url: "https://www.figma.com/",
      category: "Tools",
      tags: ["Web design", "UI/UX"],
      src: figma,
      description: "Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single platform."
    },
    {
      id: 13,
      name: "Codrops",
      url: "https://tympanus.net/codrops/",
      category: "Inspiration",
      tags: ["Frontend", "Web design"],
      src: codrop,
      description: "Keeping web professionals inspired & up-to-date since 2009"
    },
    {
      id: 14,
      name: "CoType Foundry",
      url: "https://cotypefoundry.com/",
      category: "Typography",
      tags: ["Assets", "Web design"],
      src: cotype,
      description: "CoType is the London based type foundry of Mark Bloom and Co."
    },
    {
      id: 15,
      name: "Curated.design",
      url: "https://www.curated.design/",
      category: "Inspiration",
      tags: ["Web design", "UI/UX"],
      src: curatedesign,
      description: "Unleash your creativity with out-of-this-world web design inspiration from across the web."
    },
    {
      id: 16,
      name: "Easings",
      url: "https://easings.net/",
      category: "Tools",
      tags: ["Animation"],
      src: easings,
      description: "This page helps you choose the right easing function."
    },
    {
      id: 17,
      name: "Dark Mode Design",
      url: "https://www.darkmodedesign.com/",
      category: "Inspiration",
      tags: ["Frontend", "UI/UX", "Web design"],
      src: darkmode,
      description: "Dark Mode Design is a showcase of beautifully designed and inspiring dark mode websites. Dim the lights, lower your screen brightness, and enjoy."
    },
    {
      id: 18,
      name: "Doing Cool Stuff",
      url: "https://www.doingcoolstuff.xyz/",
      category: "Inspiration",
      tags: ["UI/UX", "Web design"],
      src: coolstuff,
      description: "A directory of brand, motion and digital product design studios doing cool stuff."
    },
    {
      id: 19,
      name: "Domestika",
      url: "https://www.domestika.org/",
      category: "Upskilling",
      tags: ["Learning", "Online Courses"],
      src: domestika,
      description: "Domestika is the largest creative community. Learn and share from anywhere with online courses taught by the best professionals in the world of design and creativity."
    }
  ];
  
  export default data;
  