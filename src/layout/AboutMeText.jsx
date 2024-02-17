import { motion } from "framer-motion";
const AboutMeText = () => {
  const message =
    "A Devoted Web Developer professional, eager to flourish career in the industry following the proper engineering process and meeting organizational goals consistently. Seeking a new challenge as a MERN Stack Developer, with a focus on creating dynamic and scalable web applications that meet end-user needs. Experienced software developer with over two years of hands-on experience in developing in-house ERP software with DreamApps ERP++, creating reports with Crystal Report, and providing ERP related support to users. As a proactive learner, I stay up-to-date with the latest technologies, tools, and trends in software development, and I am continuously expanding my skillset. My commitment to delivering high-quality software solutions and providing exceptional support to end-users will ensure I am a valuable asset for organization.";
  const words = message.split(" ");

  return (
    <p className="text-center lg:text-justify text-xl font-lora">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index / 10 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </p>
  );
};

export default AboutMeText;
