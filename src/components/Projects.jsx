import ProjectCard from "../layout/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Biker's Ocean",
      images: {
        img1: {
          id: "img-1",
          path: "/src/assets/images/certification.png",
        },
        img2: {
          id: "img-1",
          path: "/src/assets/images/study.png",
        },
        img3: {
          id: "img-3",
          path: "/src/assets/images/skill.png",
        },
      },
      shortDescriptions:
        "Online Bike reseller website built using React js, Firebase, Express js, Nodejs, and MongoDB",
      features: [
        "User Authentication",
        "User Authorization",
        "Implement Private Route",
        "User can book their desired product",
        "Online payment system built",
        "Different Dashboard for users, seller and admin",
        "Seller Authentication",
        "Seller Authorization",
        "Admin Authentication",
        "Admin Authorization",
        "Delete Users and Sellers by Admin",
        "Product Added by Seller",
        " Advertise new product",
      ],
      frontEndTech: [
        "React",
        "Tailwind and DaisyUI",
        "React Router Dom",
        "React Query (TanStack Query)",
        "Axios",
        "Firebase",
      ],
      backEndTech: [
        "Nodejs",
        "Expressjs",
        "Cors",
        "Json Web Token (JWT)",
        "MongoDB",
        "Stripe Payment Gateway",
      ],
      links: [
        {
          url: "https://github.com/rajibdas-it/bikers-ocean-client",
          title: "Client Code",
        },
        {
          url: "https://github.com/rajibdas-it/bikers-ocean-server",
          title: "Server Code",
        },
        { url: "https://bikers-ocean.web.app/", title: "Live Site" },
      ],
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-lora text-center mt-10 font-bold">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
