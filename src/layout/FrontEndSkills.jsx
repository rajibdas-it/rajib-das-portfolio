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
    bar: {
      hue: 32,
      saturation: 50,
      level: {
        minimum: 30,
        maximum: 70,
      },
    },
    title: {
      text: {
        hue: 45,
        saturation: {
          minimum: 30,
          maximum: 70,
        },
        level: 50,
      },
      background: {
        hue: 70,
        saturation: {
          minimum: 30,
          maximum: 70,
        },
        level: {
          minimum: 0,
          maximum: 50,
        },
      },
    },
  };

  return (
    <div>
      <SkillBar skills={skills} height={10} colors={colors} />
    </div>
  );
};

export default FrontEndSkills;
