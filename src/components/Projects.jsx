import ProjectCard from "../layout/ProjectCard";

const Projects = () => {
  const projects = [
    { id: 1, title: "Project-1" },
    { id: 2, title: "Project-2" },
    { id: 3, title: "Project-3" },
    { id: 4, title: "Project-4" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
