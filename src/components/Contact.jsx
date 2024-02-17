import Email from "../layout/Email";

import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" my-5 lg:px-5">
      <h1 className="text-center my-10 font-semibold text-4xl font-lora">
        Contact Me
      </h1>
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-around">
        <div className="flex flex-col justify-center items-center lg:flex-none lg:justify-start lg:items-start ">
          <h1 className="text-4xl font-bold italic mb-5">Get In Touch</h1>
          <div className="flex gap-3 mt-5 ">
            <div>
              <MdOutlinePhoneAndroid className="w-6 h-6" />
            </div>
            <div>
              <p>+880-1722-737200</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5 ">
            <div>
              <MdEmail className="w-6 h-6" />
            </div>

            <div>
              <p>rajibrad@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5 ">
            <div>
              <FaFacebook className="w-6 h-6" />
            </div>

            <div>
              <a
                href="https://www.facebook.com/rajibrad"
                target="_blank"
                rel="noreferrer"
              >
                /rajibrad
              </a>
            </div>
          </div>
          <div className="flex gap-3 mt-5 ">
            <div>
              <FaLinkedin className="w-6 h-6" />
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/rajibdas-/"
                target="_blank"
                rel="noreferrer"
              >
                /rajibdas
              </a>
            </div>
          </div>
          <div className="flex gap-3 mt-5 ">
            <div>
              <FaGithub className="w-6 h-6" />
            </div>

            <div>
              <a
                href="https://github.com/rajibdas-it"
                target="_blank"
                rel="noreferrer"
              >
                /rajibdas-it
              </a>
            </div>
          </div>
        </div>

        <div>
          <Email />
        </div>
      </div>
      <hr className="mt-10 border-purple-500/15" />
    </div>
  );
};

export default Contact;
