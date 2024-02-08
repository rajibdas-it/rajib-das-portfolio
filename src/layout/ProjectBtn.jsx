/* eslint-disable react/prop-types */

const ProjectBtn = ({ url, title }) => {
  return (
    <button className="btn btn-sm btn-outline btn-primary">
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </button>
  );
};

export default ProjectBtn;
