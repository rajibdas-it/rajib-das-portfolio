/* eslint-disable react/prop-types */
import { FaCheck, FaClipboardList } from "react-icons/fa";

const BackEndTech = ({ backEndTech }) => {
  return (
    <div>
      <h4 className="text-secondary text-xl font-bold">
        {" "}
        <FaClipboardList className="inline w-6 h-6" /> Back End
      </h4>
      {backEndTech.length > 0 &&
        backEndTech.map((ft, i) => (
          <p key={i}>
            <FaCheck className="inline" /> {ft}
          </p>
        ))}
    </div>
  );
};

export default BackEndTech;
