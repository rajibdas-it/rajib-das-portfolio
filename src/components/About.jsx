// import img1 from "../assets/images/rajib.jpeg";
import img from "../assets/images/about.png";
import AboutMeText from "../layout/AboutMeText";
import Title from "../layout/Title";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="my-5  lg:px-5">
      <Title title="About Me" />
      <div className="my-10 flex flex-col md:flex-row items-center gap-5 lg:py-5 ">
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 3 }}
          className="flex justify-center items-center w-full md:w-1/2 overflow-hidden"
        >
          <img
            className="rounded-full cursor-pointer lg:w-[450px] lg:h-[450px]"
            src={img}
            width={300}
            height={300}
            alt=""
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: "100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <AboutMeText />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
