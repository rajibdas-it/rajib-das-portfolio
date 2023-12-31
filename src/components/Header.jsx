/* eslint-disable react/no-unescaped-entities */

import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";
const Header = () => {
  return (
    <div className="border border-myRed my-5 min-h-screen] lg:px-5">
      <div className="my-10 border border-myRed flex flex-col md:flex-row gap-5 lg:py-5 ">
        <div className="border border-myRed w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl">
            Hi I'm <span className="font-semibold text-myRed">Rajib Das</span>
          </h1>
          <h1 className="text-4xl">Software Engineer</h1>
          <button className="btn bg-curiousBlue hover:bg-myRed transition-all duration-300 ">
            Download CV
          </button>
          <div className="flex flex-row gap-5 my-5">
            <a href="#">
              {" "}
              <FaFacebook
                size={24}
                className="hover:text-curiousBlue cursor-pointer transition-all duration-200"
              />
            </a>
            <a href="">
              {" "}
              <FaLinkedin
                size={24}
                className="hover:text-curiousBlue cursor-pointer transition-all duration-200"
              />
            </a>
            <a href="">
              {" "}
              <FaGithubSquare
                size={24}
                className="hover:text-curiousBlue cursor-pointer transition-all duration-200"
              />
            </a>
          </div>
        </div>
        <div className="border border-myRed p-3 w-full md:w-1/2">
          {" "}
          Image Part
        </div>
      </div>
    </div>
  );
};

export default Header;
