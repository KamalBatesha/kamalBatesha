import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AbotMe/AboutMe";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <main className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="fixed w-full h-full z-[-2]">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>{" "}
      </div>
      <NavBar />
      <div className="container px-3 mx-auto overflow-hidden">
        <Hero />
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
