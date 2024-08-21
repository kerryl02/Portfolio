import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "@/data";
import Clients from "./components/Clients";
import Objectif from "./components/Objectif";
import Approche from "./components/Approche";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Objectif />
        <Approche />
        <Footer />
      </div>
    </main>
  );
}
