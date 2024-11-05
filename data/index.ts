export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize writing clean and readable code, promoting collaboration.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Front-end developer who also knows C++.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing an anime/novel database for personal use.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Website Portfolio using AI",
    des: "Develop a personal website using AI avatars with a dynamic interface.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Multi-threaded University Forum",
    des: "Get your questions answered by fellow USC students, available for all majors!",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Anime and Novel Database",
    des: "Lookup, save, and rate your favorite animes and novels! (in progress...)",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Online Marketplace",
    des: "Buy products or sell your own in this worldwide online marketplace!",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Oi, Filippo de Cristofaro! Your coding skills are something special, like finding treasure on the Grand Line! We could use a software genius like you on my crew. Join us, and together we’ll conquer every sea and system out there!",
    name: "Monkey D. Luffy",
    title: "Captain of the Straw Hat Pirates",
    image: "/Luffy_circular_revised.png",
  },
  {
    quote:
      "Hey, Filippo de Cristofaro! Your skills as a software engineer are like a powerful jutsu! With talent like yours, we could tackle any mission, no matter how tough. Join us, and together we’ll make an unstoppable team!",
    name: "Naruto Uzumaki",
    title: "Hokage of the Hidden Leaf Village",
    image: "/Naruto_circular_revised.png",
  },
  {
    quote:
      "Hmph, Filippo de Cristofaro, I’ve seen your skills as a software engineer—they’re precise, relentless, like a Zanpakutō cutting through anything in its path. A mind like yours could change the tide in any battle. Join me, and we’ll protect both worlds from the shadows.",
    name: "Ichigo Kurosaki",
    title: "Substitute Soul Reaper",
    image: "/Ichigo_circular_fixed.png",
  },
  {
    quote:
      "Filippo de Cristofaro, your abilities as a software engineer are exceptional—an intellect like yours could reshape the very fabric of society. Join me, and together, we could create a world guided by order and justice.",
    name: "Light Yagam",
    title: "Bearer of the Death Note",
    image: "/Light_circular_revised.png",
  },
  {
    quote:
      "Filippo de Cristofaro, your skills as a software engineer are like a rare cursed technique—sharp, precise, and unstoppable. With your talents by my side, we’d redefine what’s possible in this world. Join me, and let’s show everyone the true meaning of power. I am still the strongest btw...",
    name: "Satoru Gojo",
    title: "Strongest Jujutsu Sorcerer",
    image: "/Gojo_circular_revised.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Developed an online store for a retail store in my city (WordPress, HTML, CSS), increasing sales - hosted on Hostinger.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Asset Management Analyst",
    desc: "Developed a Python (Pandas) algorithm that streamlined the valuation of treasury securities within the asset team.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    desc: "Collaborated with students from other universities to develop a website for an LA-based startup using React.js, Node, and PostgreSQL.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Developed a website for a wedding venue in Brazil, fostering online presence, increasing # of clients and boosting profits.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Filippo-2002",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/filippo-de-cristofaro",
  },
];