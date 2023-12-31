import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-tr from-bgNavy to-bgBlack px-5 p-5 lg:px-32">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
