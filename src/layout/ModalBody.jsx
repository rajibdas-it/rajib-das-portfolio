/* eslint-disable react/prop-types */

import img1 from "../assets/images/certification.png";
import img2 from "../assets/images/skill.png";
import img3 from "../assets/images/study.png";
import { FaCheck, FaSlackHash, FaClipboardList } from "react-icons/fa";

const ModalBody = ({ project }) => {
  console.log(project);
  return (
    <dialog id={`my_modal_${project.id}`} className="modal lg:w-10/12">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello! {project?.title}</h3>
        <div className="flex flex-col">
          <div className="w-full">
            <img src={img3} alt="" />
          </div>
          <div className="w-1/2 flex flex-row">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>
        <p>
          Online Bike reseller website built using React js, Firebase, Express
          js, Nodejs, and MongoDB
        </p>
        {/* project descriptions  */}
        <div>
          <h3 className="text-secondary text-2xl font-bold">
            <FaSlackHash className="inline" /> Features
          </h3>
          <p>
            <FaCheck className="inline" /> User Authentication
          </p>
          <p>
            <FaCheck className="inline" /> User Authorization
          </p>
          <p>
            <FaCheck className="inline" /> Implement Private Route
          </p>
          <p>
            <FaCheck className="inline" /> User can book their desired product
          </p>
          <p>
            <FaCheck className="inline" /> Online payment system built
          </p>
          <p>
            <FaCheck className="inline" /> Different Dashboard for users, seller
            and admin
          </p>
          <p>
            <FaCheck className="inline" /> Seller Authentication
          </p>
          <p>
            <FaCheck className="inline" /> Seller Authorization
          </p>
          <p>
            <FaCheck className="inline" /> Admin Authentication
          </p>
          <p>
            <FaCheck className="inline" /> Admin Authorization
          </p>
          <p>
            <FaCheck className="inline" /> Delete Users and Sellers by Admin
          </p>
          <p>
            <FaCheck className="inline" /> Product Added by Seller
          </p>
          <p>
            <FaCheck className="inline" /> Advertise new product
          </p>
        </div>
        <div>
          <h3 className="text-secondary text-2xl font-bold mb-2">
            <FaSlackHash className="inline" /> Technology Used
          </h3>
          <div>
            <h4 className="text-secondary text-xl font-bold">
              <FaClipboardList className="inline w-6 h-6" /> Front End
            </h4>
            <p>
              <FaCheck className="inline" /> React
            </p>
            <p>
              <FaCheck className="inline" /> Tailwind and DaisyUI
            </p>
            <p>
              <FaCheck className="inline" /> React Router Dom
            </p>
            <p>
              <FaCheck className="inline" /> React Query (TanStack Query)
            </p>
            <p>
              <FaCheck className="inline" /> Axios
            </p>
            <p>
              <FaCheck className="inline" /> Firebase
            </p>
          </div>
          <div>
            <h4 className="text-secondary text-xl font-bold">
              {" "}
              <FaClipboardList className="inline w-6 h-6" /> Back End
            </h4>
            <p>
              <FaCheck className="inline" /> Nodejs
            </p>
            <p>
              <FaCheck className="inline" /> Expressjs
            </p>
            <p>
              <FaCheck className="inline" /> Cors
            </p>
            <p>
              <FaCheck className="inline" /> Json Web Token(JWT)
            </p>
            <p>
              <FaCheck className="inline" /> MongoDB
            </p>
            <p>
              <FaCheck className="inline" /> Stripe Payment Gateway
            </p>
          </div>
        </div>
        {/* project descriptions  */}
        <div className="my-2 flex flex-row gap-1 md:gap-4">
          <button className="btn btn-sm btn-outline btn-primary">
            <a
              href="https://github.com/rajibdas-it/bikers-ocean-client"
              target="_blank"
              rel="noreferrer"
            >
              Client Code
            </a>
          </button>
          <button className="btn btn-sm btn-outline btn-primary">
            <a
              href="https://github.com/rajibdas-it/bikers-ocean-server"
              target="_blank"
              rel="noreferrer"
            >
              Server Code
            </a>
          </button>
          <button className="btn btn-sm btn-outline btn-primary">
            <a
              href="https://bikers-ocean.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ModalBody;
