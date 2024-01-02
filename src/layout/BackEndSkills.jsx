import SkillBar from "react-skillbars";

const BackEndSkills = () => {
  const skills = [
    { type: "HTML", level: 100 },
    { type: "CSS", level: 85 },
    { type: "Tailwind", level: 75 },
    { type: "Ant Design", level: 50 },
    { type: "React Js", level: 25 },
    { type: "Next Js", level: 20 },
  ];
  return (
    <div>
      <SkillBar skills={skills} height={10} offset={`25px`} />
    </div>
  );
};

export default BackEndSkills;
