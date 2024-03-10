/* eslint-disable react/prop-types */
import { useProjects } from "../../context/ProjectContext";
import InputTask from "../InputTask.jsx/InputTask";
import Tasks from "../Tasks/Tasks";
import Title from "../Title/Title";
import "./Main.css";
function Main() {
  const { activeProject, projects } = useProjects();
  console.log(activeProject);
  return activeProject !== null ? (
    <main className="main">
      <Title title={projects[activeProject].title} />
      <Tasks project={projects[activeProject]} index={activeProject} />
      <InputTask />
    </main>
  ) : (
    <main className="main">Nothing to see here yet...</main>
  );
}

export default Main;
