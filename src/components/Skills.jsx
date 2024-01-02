import { useState } from "react";
import EducationInfo from "../layout/EducationInfo";
import Trainning from "../layout/Trainning";
import FrontEndSkills from "../layout/FrontEndSkills";
import BackEndSkills from "../layout/BackEndSkills";

const Skills = () => {
  const [experience, setExperience] = useState("job");

  return (
    <div className="border border-myRed  lg:px-5 ">
      <h1 className="text-4xl font-lora text-center">
        Education & Work Experience
      </h1>

      <div className="lg:flex justify-end">
        <div className="lg:w-7/12 lg:flex justify-end">
          <div className="mt-8">
            <div role="tablist" className="tabs tabs-lifted">
              <a
                role="tab"
                className={`tab ${
                  experience === "job" && "tab-active"
                } text-[9px] md:text-[14px] font-semibold`}
                onClick={() => setExperience("job")}
              >
                Work Experience
              </a>
              <a
                role="tab"
                className={`tab ${
                  experience === "education" && "tab-active"
                } text-[9px] md:text-[14px] font-semibold`}
                onClick={() => setExperience("education")}
              >
                Educations
              </a>
              <a
                role="tab"
                className={`tab ${
                  experience === "certification" && "tab-active"
                } text-[9px] md:text-[14px] font-semibold`}
                onClick={() => setExperience("certification")}
              >
                Certification & Trannings
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div>
          {experience === "job" ? (
            <FrontEndSkills />
          ) : experience === "education" ? (
            <BackEndSkills />
          ) : (
            <Trainning />
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
