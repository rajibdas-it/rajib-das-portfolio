import SkillBar from "react-skillbars";

const FrontEndSkills = () => {
  const skills = [
    { type: "HTML", level: 100 },
    { type: "CSS", level: 85 },
    { type: "Tailwind", level: 75 },
    { type: "Ant Design", level: 50 },
    { type: "React Js", level: 25 },
    { type: "Next Js", level: 20 },
  ];

  // const colors = {
  //   bar: "#5a68a5",
  //   title: { text: "#fff", background: "#46465e" },
  // };

  const colors = {
    title: { background: "#580E84", text: "#fff" },
    bar: "linear-gradient(to right,#6471F7, #905EF6, #D44DBC)",
  };

  return (
    <div>
      <SkillBar skills={skills} height={15} colors={colors} />
    </div>
  );
};

export default FrontEndSkills;
