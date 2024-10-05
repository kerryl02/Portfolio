import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Collaboration client optimale avec une communication claire.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Flexible avec les fuseaux horaires pour vos communications.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Mes techno",
      description: "Je cherche constamment à m'améliorer.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Passionné de technologie et de développement.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Développement d'une bibliothèque d'animations Javascript",
      description: "Les Coulisses",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Prêt à démarrer un projet ensemble ?",
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
      title: "Agence de conception Web | Hexweb",
      des: "Découvrez Hexweb, votre partenaire digital pour des sites web modernes, performants et sur mesure.",
      img: "/p2.png",
      iconLists: ["/vitejs.svg", "/tail.svg", "/nodejs.svg"],
      link: "https://hexweb.fr/",
    },
    {
      id: 2,
      title: "Boutique e-commerce",
      des: "Création d'un site e-commerce avec React, Node.js, et Stripe. Interface responsive avec Tailwind CSS.",
      img: "/dzdzd.svg",
      iconLists: ["/vitejs.svg", "/tail.svg", "/nodejs.svg"],
      link: "https://e-commerce-project-ik5s.vercel.app/",
    },
    {
      id: 3,
      title: "Développement en Cours",
      des: "",
      img: "/p1.svg",
      iconLists: ["/vitejs.svg", "/tail.svg", "/nodejs.svg"],
      link: "https://github.com/kerryl02",
    },
    {
      id: 4,
      title: "Développement en Cours",
      des: "",
      img: "/p1.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/kerryl02",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Travailler avec Kerryl a été une expérience formidable. Malgré son statut de développeur autodidacte, il a montré une grande capacité d'apprentissage et un véritable enthousiasme pour le projet. Ses idées innovantes et son désir de réussir ont largement contribué à la réussite du projet.",
      name: "Antoine Girard",
      title: "Directeur Technique",
    },
    {
      quote:
        "La collaboration avec Kerryl a été très satisfaisante. Il a su comprendre rapidement nos besoins et livrer un travail de qualité, malgré son expérience encore jeune. Son enthousiasme pour le développement est contagieux et prometteur.",
      name: "Léa Morel",
      title: "Chef de Projet",
    },
    {
      quote:
        "Travailler avec Kerryl a été super ! Même en tant que débutant, il a apporté une énergie fraîche et une vraie envie d'apprendre. On a vraiment apprécié sa façon de s'investir dans le projet.",
      name: "Lucas Lefèvre",
      title: "Directeur Technique",
    },
    {
      quote:
        "On a eu beaucoup de plaisir à collaborer avec Kerryl. Il est encore en début de carrière, mais il a montré un vrai potentiel et une attitude super positive. Hâte de voir où il ira !",
      name: "Émilie Delorme",
      title: "Ceo",
    },
    {
      quote:
        "La collaboration avec Kerryl a été très satisfaisante. Il a su comprendre rapidement nos besoins et livrer un travail de qualité, malgré son expérience encore jeune. Son enthousiasme pour le développement est contagieux et prometteur.",

      name: "Alexandre Dupuis",
      title: "Chef de Projet",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "les 3 palmier",
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
      title: "Architecture du site et UX",
      desc: "Je conçois des sites intuitifs et attractifs pour offrir une expérience fluide et accessible sur tous les appareils.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Sécurité du site",
      desc: "Je mets en place des mesures de sécurité robustes pour protéger vos données et garantir la confiance des utilisateurs.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Performance technique",
      desc: "J’optimise chaque aspect technique de votre site pour assurer une vitesse et une fiabilité maximales.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Contenu de qualité",
      desc: "Je crée un contenu pertinent et engageant pour attirer vos visiteurs et améliorer votre visibilité SEO.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      title: "github logo",
      link: "https://github.com/kerryl02/",
      img: "/git.svg",
    },
    {
      id: 2,
      title: "twitter logo",
      link: "https://x.com/kerryl_s",
      img: "/twit.svg",
    },
    {
      id: 3,
      title: "linkedin logo",
      link: "https://www.linkedin.com/in/kerryl-soda-en-recherche-stage/",
      img: "/link.svg",
    },
  ];