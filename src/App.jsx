import About from "./components/About";
import Education from "./components/Education";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-gradient-to-tr from-[#001F3F] to-[#000000] px-5 p-5 lg:px-32">
      <div className="max-w-[1490px] mx-auto">
        <Navbar />
        <Header />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
      </div>
    </div>
  );
};

export default App;
