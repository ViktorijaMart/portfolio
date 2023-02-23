import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import "./Project.css";

library.add(faSquareGithub, faLink);

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

const Project = (props: props) => {
  const { id } = useParams();
  const project = getProject(id);

  function getProject(id: string | undefined) {
    if (id) {
      return props.projects.find((project) => +project.id === +id);
    }
  }

  if (project) {
    return (
      <div className="project__container">
        <h2 className="project__name">{project.name}</h2>
        <div className="project__links">
          <a href={project.github} className="project__link" target="_blank">
            <FontAwesomeIcon icon={["fab", "square-github"]} />
          </a>
          {project.page && (
            <a href={project.page} className="project__link" target="_blank">
              <FontAwesomeIcon icon={["fas", "link"]} />
            </a>
          )}
        </div>
        <p className="project__description">{project.description}</p>
        <div className="project__languages-container">
          <h3>Technologies:</h3>
          <div className="project__languages">
            {project.languages.map((lang) => {
              return <p className="project__language">{lang}</p>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Project not found</h2>;
  }
};

export default Project;
