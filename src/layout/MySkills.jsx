import SkillBar from "react-skillbars";

const MySkills = () => {
  const skills = [
    { type: "HTML", level: 95 },
    { type: "CSS", level: 85 },
    { type: "Bootstrap", level: 60 },
    { type: "Tailwind", level: 80 },
    { type: "Ant Design", level: 50 },
    { type: "React Js", level: 80 },
    { type: "Next Js", level: 80 },
    { type: "NodeJs", level: 70 },
    { type: "Express Js", level: 80 },
    { type: "MongoDB", level: 70 },
    { type: "SQL", level: 70 },
    { type: "Prisma", level: 70 },
    { type: "Redis", level: 50 },
    { type: "GraphQL", level: 50 },
    { type: "AWS", level: 50 },
    { type: "Docker", level: 50 },
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
      <SkillBar skills={skills} height={20} colors={colors} />
    </div>
  );
};

export default MySkills;
