/* eslint-disable react/prop-types */
const ProjectImg = ({ images }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <img src={images?.img1?.path} alt={`Image ${images?.img1?.id}`} />
      </div>
      <div className="w-1/2 flex flex-row">
        <img src={images?.img2?.path} alt={`Image ${images?.img2?.id}`} />
        <img src={images?.img1?.path} alt={`Image ${images?.img3?.id}`} />
      </div>
    </div>
  );
};

export default ProjectImg;
