import img1 from "../assets/images/rajib.jpeg";
const About = () => {
  return (
    <div className="border border-myRed my-5 min-h-screen] lg:px-5">
      <h1 className="text-center font-semibold text-4xl font-lora">About Me</h1>
      <div className="my-10 border border-myRed flex flex-col md:flex-row items-center gap-5 lg:py-5 ">
        <div className="flex  justify-center items-center border border-myRed w-full md:w-1/2 overflow-hidden">
          <img
            className="rounded-full hover:scale-125 cursor-pointer transition-transform duration-300"
            src={img1}
            width={300}
            alt=""
          />
        </div>
        <div className="border border-myRed w-full md:w-1/2 ">
          <p className="text-center lg:text-justify text-xl font-lora">
            A Devoted Web Developer professional, eager to flourish career in
            the industry following the proper engineering process and meeting
            organizational goals consistently. Seeking a new challenge as a MERN
            Stack Developer, with a focus on creating dynamic and scalable web
            applications that meet end-user needs. Experienced software
            developer with over two years of hands-on experience in developing
            in-house ERP software with DreamApps ERP++, creating reports with
            Crystal Report, and providing ERP related support to users. As a
            proactive learner, I stay up-to-date with the latest technologies,
            tools, and trends in software development, and I am continuously
            expanding my skillset. My commitment to delivering high-quality
            software solutions and providing exceptional support to end-users
            will ensure I am a valuable asset for organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
