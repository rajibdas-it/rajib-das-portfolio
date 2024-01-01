import About from "./components/About";
import Education from "./components/Education";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-gradient-to-tr from-bgNavy to-bgBlack px-5 p-5 lg:px-32">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skills />
    </div>
  );
};

export default App;
