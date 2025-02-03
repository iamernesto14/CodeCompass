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
      url: "https://www.blender.org/",
      category: "Upskilling",
      tags: ["Learning", "Online Courses"],
      src: coursera,
      description: "Learn new job skills in online courses from industry leaders like Google, IBM, & Meta. Advance your career with top degrees from Michigan, Penn, Imperial & more."
    }
  ];
  
  export default data;
  