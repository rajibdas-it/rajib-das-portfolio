/* eslint-disable react/prop-types */
import { FaCheck, FaClipboardList } from "react-icons/fa";

const FrontEndTech = ({ frontEndTech }) => {
  return (
    <div>
      <h4 className="text-secondary text-xl font-bold">
        <FaClipboardList className="inline w-6 h-6" /> Front End
      </h4>
      {frontEndTech.length > 0 &&
        frontEndTech.map((ft, i) => (
          <p key={i}>
            <FaCheck className="inline" /> {ft}
          </p>
        ))}
    </div>
  );
};

export default FrontEndTech;
