import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    // className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
    <header>
      <section className="flex justify-between items-center lg:px-5">
        <div>
          <p className="text-4xl font-lora italic font-extrabold ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Rajib Das
          </p>
        </div>

        <nav className="hidden lg:flex gap-5">
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Home
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            About
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Eductation
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Skills
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Services
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Portfolio
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Contact
          </a>
        </nav>

        <div
          className="lg:hidden flex items-center"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <AiOutlineClose size={28} /> : <RiMenuLine size={28} />}
        </div>
        {/* mobile menu start  */}
        <div
          className={`${
            menu ? "translate-x-0" : "translate-x-[-100%]"
          } lg:hidden flex flex-col text-center absolute bg-gradient-to-tr from-[#001F3F] to-[#000000] left-0 top-16 text-white text-2xl font-semibold py-8 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Eductation</a>
          <a href="">Skills</a>
          <a href="">Services</a>
          <a href="">Portfolio</a>
          <a href="">Contact</a>
        </div>
        {/* mobile menu end  */}
      </section>
    </header>
  );
};

export default Navbar;
