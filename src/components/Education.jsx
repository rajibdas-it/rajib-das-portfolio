import { useState } from "react";
import WorkExperiance from "../layout/WorkExperiance";
import EducationInfo from "../layout/EducationInfo";
import Trainning from "../layout/Trainning";

/* eslint-disable react/no-unescaped-entities */
const Education = () => {
  const [experience, setExperience] = useState("job");

  return (
    <div className="border border-myRed  lg:px-5 ">
      <h1 className="text-4xl font-lora text-center">
        Education & Work Experience
      </h1>

      <div className="mt-20">
        <div role="tablist" className="tabs tabs-boxed">
          <a
            role="tab"
            className={`tab ${experience === "job" && "tab-active"}`}
            onClick={() => setExperience("job")}
          >
            Work Experience
          </a>
          <a
            role="tab"
            className={`tab ${experience === "education" && "tab-active"}`}
            onClick={() => setExperience("education")}
          >
            Educations
          </a>
          <a
            role="tab"
            className={`tab ${experience === "certification" && "tab-active"}`}
            onClick={() => setExperience("certification")}
          >
            Certification & Trannings
          </a>
        </div>
        <div>
          {experience === "job" ? (
            <WorkExperiance />
          ) : experience === "education" ? (
            <EducationInfo />
          ) : (
            <Trainning />
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
