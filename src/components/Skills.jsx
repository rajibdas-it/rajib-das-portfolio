import MySkills from "../layout/MySkills";
import SkillsImg from "../layout/SkillsImg";

const Skills = () => {
  return (
    <div className="border border-myRed lg:px-5 ">
      <h1 className="text-4xl font-lora text-center mt-10">My Skills</h1>
      <div className="mt-10 flex flex-col lg:flex-row gap-6">
        <div className="border border-red-600 lg:w-8/12">
          <MySkills />
        </div>
        <div className="hidden lg:block pb-5">
          <SkillsImg />
        </div>
      </div>
    </div>
  );
};

export default Skills;
