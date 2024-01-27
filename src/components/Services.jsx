import ServiceCard from "../layout/ServiceCard";

const Services = () => {
  return (
    <div className="border border-myRed lg:px-5 ">
      <h1 className="text-4xl font-lora text-center mt-10 font-bold">
        Services
      </h1>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard title="Web Design" />
        <ServiceCard title="Web Development" />
        <ServiceCard title="ERP Implementation" />
        <ServiceCard title="Report Writing" />
      </div>
    </div>
  );
};

export default Services;
