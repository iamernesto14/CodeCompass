// data.js
import adobefonts from "./src/assets/images/adobefonts.webp";
import aceternity from "./src/assets/images/Aceternity.webp";
import astro from "./src/assets/images/astro.webp";
import arnauros from "./src/assets/images/arnau.webp";
import blender from "./src/assets/images/Blender.webp";
import awwwards from "./src/assets/images/awwwards.webp";
import atipo from "./src/assets/images/atipo.webp";
import artdedicated from "./src/assets/images/artdirected.webp";
import coursera from "./src/assets/images/coursera.webp";
import utopia from "./src/assets/images/utopia__2_.webp";
import screen from "./src/assets/images/Screen_Studio-2.webp";
import figma from "./src/assets/images/Figma__2_.webp";
import codrop from "./src/assets/images/codrops.webp";
import curatedesign from "./src/assets/images/curateddesign.webp";
import cotype from "./src/assets/images/Cotype_Foundry_Favicon.webp";
import easings from "./src/assets/images/easings.webp";
import darkmode from "./src/assets/images/darkmodedesign.webp";
import domestika from "./src/assets/images/domestika.webp";
import coolstuff from "./src/assets/images/doingcoolstuff.webp";
import next from "./src/assets/images/nextjs.webp";
import mobbin from "./src/assets/images/mobbin.webp";
import fireship from "./src/assets/images/fireship.webp";
import flux from "./src/assets/images/fluxacademy.webp";
import fontshare from "./src/assets/images/fontshare.webp";
import minimal from "./src/assets/images/minimal.webp";
import kevin from "./src/assets/images/kevin.webp";
import frontend_mentor from "./src/assets/images/frontend_mentor.webp";
import frontend_practice from "./src/assets/images/frontend_practice.webp";
import fonter from "./src/assets/images/fonter.webp";
import fyi from "./src/assets/images/fyi.webp";
import gltf from "./src/assets/images/gltf.webp";
import godly from "./src/assets/images/godly.webp";
import growth_design from "./src/assets/images/growth_design.webp";
import juxtopposed from "./src/assets/images/juxtopposed.webp";
import hyperplexed from "./src/assets/images/hyperplexed.webp";
import lighthouse from "./src/assets/images/lighthouse.webp";
import microcopy from "./src/assets/images/microcopy.webp";
import gsap from "./src/assets/images/gsap.webp";
import framer_motion from "./src/assets/images/framer_motion.webp";
const data = [
  {
    id: 7,
    name: "Awward",
    url: "https://www.awwwards.com/",
    category: "Inspiration",
    src: awwwards,
    tags: ["Frontend", "web design", "UI/UX"],
    description:
      "Awwwards showcase and award websites that demonstrate exceptional design, innovation, and user experience. The platform features a collection of websites that are evaluated by a panel of judges based on criteria such as design, creativity, usability, and content.",
  },
  {
    id: 1,
    name: "Cousera",
    url: "https://www.coursera.org/",
    category: "Upskilling",
    tags: ["Learning", "Online Courses"],
    src: coursera,
    description:
      "Learn new job skills in online courses from industry leaders like Google, IBM, & Meta. Advance your career with top degrees from Michigan, Penn, Imperial & more.",
  },
  {
    id: 2,
    name: "Figma",
    url: "https://www.figma.com/",
    category: "Tools",
    tags: ["Web design", "UI/UX"],
    src: figma,
    description:
      "Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single platform.",
  },
  
  {
    id: 12,
    name: "Adobe Font",
    url: "https://fonts.adobe.com/",
    category: "Typography",
    src: adobefonts,
    tags: ["Assets", "Web design"],
    description:
      "Adobe Fonts partners with the world’s leading type foundries to bring thousands of beautiful fonts to designers every day. No need to worry about licensing, and you can use fonts from Adobe Fonts on the web or in desktop applications.",
  },
 
  {
    id: 4,
    name: "Art Directed Mockups",
    url: "https://artdirected.design/",
    category: "Tools",
    tags: ["Assets", "Mockups"],
    src: artdedicated,
    description:
      "Thoughtfully crafted, realistic, premium mockups that do not look like everything else. Improve your branding presentations, social media presence and delight your clients. All mockups have real shadows, beautiful art directed scenes and urban scenarios and are over 5000px. Art Directed is a design resources company.",
  },
  {
    id: 5,
    name: "Astro",
    url: "https://astro.build/",
    category: "Technologies",
    src: astro,
    tags: ["Framework", "Frontend"],
    description:
      "The web framework for content-driven websites. Astro powers the world's fastest websites, client-side web apps, dynamic API endpoints, and everything in-between.",
  },
  {
    id: 6,
    name: "Atipo Foundry",
    url: "https://www.atipofoundry.com/",
    category: "Typography",
    src: atipo,
    tags: ["Assets", "Web Design"],
    description:
      "An independent digital typeface foundry and graphic design studio.",
  },

  {
    id: 8,
    name: "Blender",
    url: "https://www.blender.org/",
    category: "Tools",
    tags: ["3D", "Animation"],
    src: blender,
    description:
      "Blender is a free and open-source 3D computer graphics software tool set used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games.",
  },
  {
    id: 3,
    name: "Arnau Ros",
    url: "https://www.youtube.com/c/arnauros",
    category: "YT Channels",
    src: arnauros,
    tags: ["Freelancer", "Learning", "Web Design"],
    description: "Videos about Web Design, Webflow, Freelancing, and No Code.",
  },

  {
    id: 10,
    name: "Clamp Calculator",
    url: "https://utopia.fyi/clamp/calculator/?a=320,1440,32%E2%80%9480",
    category: "Upskilling",
    tags: ["Frontend", "Optimization"],
    src: utopia,
    description:
      "Utopia emerges when designers and developers share a systematic approach to fluidity in responsive design. Instead of designing for x number of arbitrary breakpoints, we can design a system within which elements scale proportionally and fluidly.",
  },
  {
    id: 11,
    name: "CleanShot X",
    url: "https://cleanshot.com/",
    category: "Tools",
    tags: ["Screen Recoding"],
    src: screen,
    description:
      "CleanShot X is the best screenshot and screen recording app for Mac with a built-in annotation tool, Cloud uploading, scrolling capture, and a lot more.",
  },

  {
    id: 13,
    name: "Codrops",
    url: "https://tympanus.net/codrops/",
    category: "Inspiration",
    tags: ["Frontend", "Web design"],
    src: codrop,
    description: "Keeping web professionals inspired & up-to-date since 2009",
  },
  {
    id: 14,
    name: "CoType Foundry",
    url: "https://cotypefoundry.com/",
    category: "Typography",
    tags: ["Assets", "Web design"],
    src: cotype,
    description:
      "CoType is the London based type foundry of Mark Bloom and Co.",
  },
  {
    id: 15,
    name: "Curated.design",
    url: "https://www.curated.design/",
    category: "Inspiration",
    tags: ["Web design", "UI/UX"],
    src: curatedesign,
    description:
      "Unleash your creativity with out-of-this-world web design inspiration from across the web.",
  },
  {
    id: 16,
    name: "Easings",
    url: "https://easings.net/",
    category: "Tools",
    tags: ["Animation"],
    src: easings,
    description: "This page helps you choose the right easing function.",
  },
  {
    id: 17,
    name: "Dark Mode Design",
    url: "https://www.darkmodedesign.com/",
    category: "Inspiration",
    tags: ["Frontend", "UI/UX", "Web design"],
    src: darkmode,
    description:
      "Dark Mode Design is a showcase of beautifully designed and inspiring dark mode websites. Dim the lights, lower your screen brightness, and enjoy.",
  },
  {
    id: 9,
    name: "Aceternity",
    url: "https://ui.aceternity.com/",
    category: "Tools",
    tags: ["Animation", "Frontend", "Library"],
    src: aceternity,
    description:
      "Premade UI Components built with Next.js, Tailwindcss & Framer Motion. Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
  },
  {
    id: 18,
    name: "Doing Cool Stuff",
    url: "https://www.doingcoolstuff.xyz/",
    category: "Inspiration",
    tags: ["UI/UX", "Web design"],
    src: coolstuff,
    description:
      "A directory of brand, motion and digital product design studios doing cool stuff.",
  },
  {
    id: 19,
    name: "Domestika",
    url: "https://www.domestika.org/",
    category: "Upskilling",
    tags: ["Learning", "Online Courses"],
    src: domestika,
    description:
      "Domestika is the largest creative community. Learn and share from anywhere with online courses taught by the best professionals in the world of design and creativity.",
  },
  {
    id: 20,
    name: "Next.js",
    url: "https://nextjs.org/",
    category: "Technologies",
    tags: ["Framework", "Frontend"],
    src: next,
    description:
      "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
  },
  {
    id: 21,
    name: "Mobbin",
    url: "https://mobbin.com/browse/web/ui-elements",
    category: "Inspiration",
    tags: ["UI/UX", "Web Design"],
    src: mobbin,
    description:
      "Browse and search across thousands of Web UI elements for UI & UX research.",
  },
  {
    id: 22,
    name: "Fireship",
    url: "https://www.youtube.com/c/fireship/featured",
    category: "YT Channels",
    tags: ["Learning", "Frontend"],
    src: fireship,
    description:
      "High-intensity ⚡ code tutorials and tech news to help you ship your app faster. New videos every week covering the topics every programmer should know.",
  },
  {
    id: 23,
    name: "Flux Academy",
    url: "https://www.youtube.com/@FluxAcademy",
    category: "YT Channels",
    tags: ["Learning", "Web Design", "Freelancing"],
    src: flux,
    description:
      "Learn to be a more successful and profitable web designer: master the latest trends, tools, and technologies, and make it easy to get and retain high-value dream clients. Overall, a great channel for web design and freelancing.",
  },
  {
    id: 24,
    name: "Fontshare",
    url: "https://www.fontshare.com/",
    category: "Typography",
    tags: ["Assets", "Web Design"],
    src: fontshare,
    description:
      "Fontshare is a free fonts service from the Indian Type Foundry (ITF), making quality fonts accessible to all.",
  },
  {
    id: 25,
    name: "Fonter.design",
    url: "https://www.footer.design/",
    category: "Inspiration",
    tags: ["Web Design", "UI/UX"],
    src: fonter,
    description:
      "Footer is a curated gallery of the top website footer inspiration on earth. Find the footers you need and sort by type and style.",
  },
  {
    id: 26,
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io/",
    category: "Upskilling",
    tags: ["Frontend", "Project-based Learning"],
    src: frontend_mentor,
    description:
      "Improve your front-end skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.",
  },
  {
    id: 27,
    name: "Godly",
    url: "https://godly.website/",
    category: "Inspiration",
    tags: ["Frontend", "UI/UX", "Web Design"],
    src: godly,
    description:
      "Astronomically good web design inspiration from all over the internet",
  },
  {
    id: 28,
    name: "Hyperplexed",
    url: "https://www.youtube.com/@Hyperplexed",
    category: "YT Channels",
    tags: ["Frontend", "Animation"],
    src: hyperplexed,
    description:
      "Hyperplexed is a fantastic resource for frontend developers, offering valuable insights into both the process and mindset of a frontend developer.",
  },
  {
    id: 29,
    name: "Lighthouse",
    url: "https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk",
    category: "Tools",
    tags: ["Optimization", "Frontend"],
    src: lighthouse,
    description:
      "Lighthouse is a free, automated tool designed to enhance the performance, accuracy, and overall quality of web applications.",
  },
  {
    id: 30,
    name: "Microcopy",
    url: "https://www.microcopy.me/",
    category: "Tools",
    tags: ["Productivity", "Copywriting"],
    src: microcopy,
    description:
      "Search micro UX copy text: slogans, headlines, notifications, CTA, error messages, email, account preferences, and much more.",
  },
  {
    id: 31,
    name: "Juxtopposed",
    url: "https://www.youtube.com/@juxtopposed",
    category: "YT Channels",
    tags: ["Frontend", "UI/UX"],
    src: juxtopposed,
    description:
      "An engaging and informative YouTube channel focused on UI/UX design, with some frontend content mixed in—plus plenty of cats for added fun!",
  },
  {
    id: 32,
    name: "Growth.design",
    url: "https://growth.design/case-studies",
    category: "Upskilling",
    tags: ["Learning", "UI/UX", "Web Design"],
    src: growth_design,
    description:
      "See exactly how companies like Tinder, Airbnb, Trello, Uber and Tesla design products that people love. One new user experience case study every month.",
  },
  {
    id: 33,
    name: "Frontend Practice",
    url: "https://www.frontendpractice.com/",
    category: "Upskilling",
    tags: ["Frontend", "Project-based Learning"],
    src: frontend_practice,
    description:
      "Enhance your frontend skills by replicating actual websites from real-world companies.",
  },
  {
    id: 34,
    name: "Framer Motion",
    url: "https://www.framer.com/motion/",
    category: "Technologies",
    tags: ["Animation", "Library", "Frontend"],
    src: framer_motion,
    description:
      "An open source motion library for React, made by Framer.",
  },
  {
    id: 35,
    name: "GSAP",
    url: "https://gsap.com/",
    category: "Technologies",
    tags: ["Animation", "Library", "Frontend"],
    src: gsap,
    description:
      "GSAP, developed by GreenSock, is a leading JavaScript animation library that enables you to create high-performance animations compatible with all major browsers.",
  },
  {
    id: 36,
    name: "Kevin Powell",
    url: "https://www.youtube.com/@KevinPowell",
    category: "YT Channels",
    tags: ["Frontend", "Learning"],
    src: kevin,
    description:
      "A YouTuber and developer who shares content focused on CSS, providing an invaluable resource for both beginners and experienced developers.",
  },
  {
    id: 37,
    name: "GLTF to JSX",
    url: "https://gltf.pmnd.rs/",
    category: "Tools",
    tags: ["Frontend", "3D"],
    src: gltf,
    description:
      "Export your GLTF file into JSX code",
  },
  {
    id: 38,
    name: "Frontend FYI",
    url: "https://www.frontend.fyi/",
    category: "YT Channels",
    tags: ["Frontend", "Animation", "Learning"],
    src: fyi,
    description:
      "An excellent channel dedicated to frontend development, where Jeroen covers best practices, interactions, animations, and more.",
  },
  {
    id: 39,
    name: "Minimal.Gallery",
    url: "https://minimal.gallery/",
    category: "Inspiration",
    tags: ["Frontend", "Web Design", "3D"],
    src: minimal,
    description:
      "For the love of beautiful, clean and functional websites.",
  },
];

export default data;
