import { Link } from "react-router-dom";

import "./Projects.css";

type project = {
  id: number;
  name: string;
  category: string;
  description: string;
  languages: string[];
  github: string;
  page: string | null;
};

type props = {
  projects: project[];
};

const Projects = (props: props) => {
  const frontendProjects = props.projects.filter(
    (project) => project.category === "frontend"
  );

  const backendProjects = props.projects.filter(
    (project) => project.category === "backend"
  );

  function displayProject(projects: project[]) {
    return projects.map((project) => {
      return (
        <Link to={`/projects/${project.id}`} className="projects__link">
          {project.name}
        </Link>
      );
    });
  }

  return (
    <div className="projects">
      <h2>Please choose a project</h2>
      <div className="projects__links">
        <>
          <h3 className="project__category">Front End</h3>
          {displayProject(frontendProjects)}
          <h3 className="project__category">Full Stack</h3>
          {displayProject(backendProjects)}
        </>
      </div>
    </div>
  );
};

export default Projects;
