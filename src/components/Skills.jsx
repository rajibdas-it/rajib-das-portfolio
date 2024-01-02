/* eslint-disable no-unused-vars */
import RadialSkillBar from "../layout/RadialSkillBar";
import SkillCard from "../layout/skillCard";

const Skills = () => {
  return (
    <div>
      <div
        className="radial-progress text-primary"
        style={{ "--value": 70 }}
        role="progressbar"
      >
        70%
      </div>
    </div>
  );
};

export default Skills;
