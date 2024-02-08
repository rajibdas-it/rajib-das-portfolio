/* eslint-disable react/no-unescaped-entities */

import { TypeAnimation } from "react-type-animation";
import img from "../assets/images/hero.png";

const Header = () => {
  return (
    <div className=" my-5 min-h-screen] lg:px-5">
      <div className="my-10  flex flex-col md:flex-row gap-5 lg:py-5 ">
        <div className=" w-full md:w-1/2 space-y-6 lg:space-y-12">
          <h1 className=" text-4xl lg:text-[50px] font-montserrat font font-extrabold">
            Hi, I'm
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Rajib Das
            </span>
          </h1>
          <h1 className="text-4xl lg:text-[3em] font-montserrat font-bold">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "",
                "Web Designer",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
              cursor={false}
            />
          </h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <a className="cursor-pointer bg-white text-center py-3 px-6 rounded-full text-white font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1hss0OKKX9VURrHZYrxfjLs0Au3avDymG/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer px-1 py-1 text-center bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500  text-white font-semibold rounded-full hover:bg-slate-800"
            >
              <span className="block bg-gradient-to-tr from-[#001F3F] to-[#000000] px-5 py-2 rounded-full hover:bg-transparent transition-all duration-200">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="p-3 w-full md:w-1/2">
          <img className="w-full lg:w-3/5 lg:h-[300px]" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
