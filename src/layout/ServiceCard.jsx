const ServiceCard = ({ title, description }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-none">
      <div className="card-body">
        <h2 className="card-title justify-center">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
