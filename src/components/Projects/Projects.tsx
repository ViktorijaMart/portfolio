import { Link } from "react-router-dom";

import "./Projects.css";

type project = {
  id: number;
  name: string;
  categorie: string;
  description: string;
  languages: string[];
  github: string;
  page: string;
};

type props = {
  projects: project[];
};

const Projects = (props: props) => {
  return (
    <div className="projects">
      <h2>Please choose a project</h2>
      <div className="projects__links">
        {props.projects.map((project) => {
          return (
            <Link to={`/projects/${project.id}`} className="project__link">
              {project.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
