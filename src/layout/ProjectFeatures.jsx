/* eslint-disable react/prop-types */
import { FaCheck, FaSlackHash } from "react-icons/fa";

const ProjectFeatures = ({ features }) => {
  // console.log(features);
  return (
    <div>
      <h3 className="text-secondary text-2xl font-bold">
        <FaSlackHash className="inline" /> Features
      </h3>
      {features.length > 0 &&
        features.map((feature, index) => (
          <p key={index}>
            <FaCheck className="inline" /> {feature}
          </p>
        ))}
    </div>
  );
};

export default ProjectFeatures;

//
