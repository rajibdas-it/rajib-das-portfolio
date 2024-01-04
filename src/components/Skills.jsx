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
          <div className="animate-skill-spin border-2 border-slate-700 relative lg:w-[390px] lg:h-[390px] rounded-full mx-auto">
            <div>
              <img
                className="absolute top-[80px] left-[4px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/html.svg"
                alt=""
              />
              <img
                className="absolute top-[29px] left-[48px]"
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
                className="absolute -top-[21px] left-[160px]"
                width={40}
                height={40}
                src="/src/assets/images/skills/tailwind.svg"
                alt=""
              />
              <img
                className="absolute top-[-11px] left-[224px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/javascript.svg"
                alt=""
              />
              <img
                className="absolute top-[15px] left-[284px]"
                width={50}
                height={50}
                src="/src/assets/images/skills/TypeScript.svg"
                alt=""
              />
              <img
                className="absolute top-[68px] right-[15px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/react.svg"
                alt=""
              />
              <img
                className="absolute top-[121px] right-[-11px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/redux.svg"
                alt=""
              />
              <img
                className="absolute top-[198px] right-[-18px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/next-js-seeklogo.com 1.svg"
                alt=""
              />

              <img
                className="absolute top-[265px] right-[5px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/node-js-icon 1.svg"
                alt=""
              />
              <img
                className="absolute top-[319px] right-[42px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/express-js.svg"
                alt=""
              />
              <img
                className="absolute bottom-[-2px] right-[90px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/mongodb-icon 1.svg"
                alt=""
              />
              <img
                className="absolute bottom-[-15px] left-[197px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/sql-icon 1.svg"
                alt=""
              />
              <img
                className="absolute bottom-[-15px] left-[126px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/postgresql-icon 1.svg"
                alt=""
              />
              <img
                className="absolute bottom-[13px] left-[66px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/GraphQL_Logo 1.svg"
                alt=""
              />
              <img
                className="absolute bottom-[56px] left-[24px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/prisma.svg"
                alt=""
              />
              <img
                className="absolute bottom-[104px] left-[1px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/redis.svg"
                alt=""
              />

              <img
                className="absolute top-[196px] left-[-16px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/docker-icon 1.svg"
                alt=""
              />
              <img
                className="absolute top-[143px] left-[-16px]"
                width={35}
                height={35}
                src="/src/assets/images/skills/aws-icon 1.svg"
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
