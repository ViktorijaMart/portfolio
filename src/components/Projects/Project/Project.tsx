import { useParams } from "react-router-dom";

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

const Project = (props: props) => {
  const { id } = useParams();
  const project = getProject(id);

  function getProject(id: string | undefined) {
    if (id) {
      return props.projects.find((project) => +project.id === +id);
    }
  }

  if (project) {
    return <div>{project.name}</div>;
  } else {
    return <div>Project not found</div>;
  }
};

export default Project;
