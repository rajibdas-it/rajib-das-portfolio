import { useState } from "react";

import Trainning from "../layout/Trainning";
import FrontEndSkills from "../layout/FrontEndSkills";
import BackEndSkills from "../layout/BackEndSkills";

const Skills = () => {
  const [experience, setExperience] = useState("job");

  return (
    <div className="border border-myRed  lg:px-5 ">
      <h1 className="text-4xl font-lora text-center mt-10">My Skills</h1>

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

      <div className="mt-10 flex flex-col lg:flex-row gap-6">
        <div className="border border-red-600 lg:w-8/12">
          {experience === "job" ? (
            <FrontEndSkills />
          ) : experience === "education" ? (
            <BackEndSkills />
          ) : (
            <Trainning />
          )}
        </div>
        {/* git hub icon add korte hobe  */}
        <div className="hidden lg:block pb-5">
          {/* animate-skill-spin */}
          <div className="animate-skill-spin relative lg:w-[380px] lg:h-[380px] border-2 border-red-700 rounded-full mx-auto">
            <div>
              <img
                className="absolute top-20"
                width={35}
                height={35}
                src="/src/assets/images/skills/html.svg"
                alt=""
              />
              <img
                className="absolute top-[1.5rem] left-[2.5rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/css.svg"
                alt=""
              />
              <img
                className="absolute top-[-0.3rem] left-[6.5rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/bootstrap.svg"
                alt=""
              />
              <img
                className="absolute top-[-1.5rem] left-[10.5rem]"
                width={40}
                height={40}
                src="/src/assets/images/skills/tailwind.svg"
                alt=""
              />
              <img
                className="absolute top-[1rem] left-[16.5rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/javascript.svg"
                alt=""
              />
              <img
                className="absolute top-[4rem] left-[18.8rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/TypeScript.svg"
                alt=""
              />
              <img
                className="absolute top-[8rem] -right-[15px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/react.svg"
                alt=""
              />
              <img
                className="absolute top-[12rem] right-[-1rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/redux.svg"
                alt=""
              />
              <img
                className="absolute top-[16rem] right-[0.75rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/next-js-seeklogo.com 1.svg"
                alt=""
              />

              <img
                className="absolute top-[19rem] right-[4.5rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/node-js-icon 1.svg"
                alt=""
              />
              <img
                className="absolute top-[21rem] right-[9.5rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/express-js.svg"
                alt=""
              />
              <img
                className="absolute bottom-[-0.25rem] right-[14.5rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/mongodb-icon 1.svg"
                alt=""
              />
              <img
                className="absolute bottom-[3rem] left-[1.50rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/sql-icon 1.svg"
                alt=""
              />
              <img
                className="absolute top-[12.5rem] left-[-0.75rem]"
                width={35}
                height={35}
                src="/src/assets/images/skills/postgresql-icon 1.svg"
                alt=""
              />
              <img
                className="absolute top-16 left-64"
                width={35}
                height={35}
                src="/src/assets/images/skills/GraphQL_Logo 1.svg"
                alt=""
              />
              <img
                className="absolute top-28 left-64"
                width={35}
                height={35}
                src="/src/assets/images/skills/aws-icon 1.svg"
                alt=""
              />
              <img
                className="absolute top-56 left-36"
                width={35}
                height={35}
                src="/src/assets/images/skills/docker-icon 1.svg"
                alt=""
              />
              <img
                className="absolute top-56 left-36"
                width={35}
                height={35}
                src="/src/assets/images/skills/docker-icon 1.svg"
                alt=""
              />
              <img
                className="absolute top-64 left-36"
                width={35}
                height={35}
                src="/src/assets/images/skills/redis.svg"
                alt=""
              />
              <img
                className="absolute top-80 left-96"
                width={35}
                height={35}
                src="/src/assets/images/skills/prisma.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
