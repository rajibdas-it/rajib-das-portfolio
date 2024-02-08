/* eslint-disable react/prop-types */

import { FaSlackHash } from "react-icons/fa";
import ProjectImg from "./ProjectImg";
import ProjectFeatures from "./ProjectFeatures";
import FrontEndTech from "./FrontEndTech";
import BackEndTech from "./BackEndTech";
import ProjectBtn from "./ProjectBtn";

const ModalBody = ({ project }) => {
  const {
    id,
    title,
    images,
    shortDescriptions,
    features,
    frontEndTech,
    backEndTech,
    links,
  } = project || {};

  return (
    <dialog id={`my_modal_${id}`} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{title}</h3>
        <ProjectImg images={images} />
        <p>{shortDescriptions}</p>

        <ProjectFeatures features={features} />
        <div>
          <h3 className="text-secondary text-2xl font-bold mb-2">
            <FaSlackHash className="inline" /> Technology Used
          </h3>
          <FrontEndTech frontEndTech={frontEndTech} />
          <BackEndTech backEndTech={backEndTech} />
        </div>

        <div className="my-2 flex flex-row gap-2 md:gap-4">
          {links.map((link, i) => (
            <ProjectBtn key={i} title={link.title} url={link.url} />
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default ModalBody;
