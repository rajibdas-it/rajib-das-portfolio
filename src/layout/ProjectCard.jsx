/* eslint-disable react/prop-types */
import ModalBody from "./ModalBody";

const ProjectCard = ({ project }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button
            className="badge badge-outline"
            onClick={() =>
              document.getElementById(`my_modal_${project.id}`).showModal()
            }
          >
            Details
          </button>
          <ModalBody project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
