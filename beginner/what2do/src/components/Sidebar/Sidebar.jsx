/* eslint-disable react/prop-types */
import { useState } from "react";
import { useProjects } from "../../context/ProjectContext";
import "./Sidebar.css";
import { getNewProject } from "../../factories/ProjectFactory";
function Sidebar() {
  const { projects, addProject, setActiveProject, activeProject } =
    useProjects();
  const [addingNewProject, setAddingNewProject] = useState(false);
  const [title, setTitle] = useState("");
  function iniateNewProjectHandler() {
    setAddingNewProject(true);
  }
  function addNewProjectHandler() {
    addProject(getNewProject(title));
    setAddingNewProject(false);
    setTitle("");
  }

  return (
    <div className="sidebar">
      <menu>
        {projects.map((project, index) => (
          <li
            className={`item ${activeProject === index && "active"}`}
            key={`project${index}`}
            onClick={() => setActiveProject(index)}
          >
            {project.title}
          </li>
        ))}
      </menu>
      {addingNewProject ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="button" onClick={addNewProjectHandler}>
            <span>✔️</span>Done
          </button>
        </>
      ) : (
        <button className="button" onClick={iniateNewProjectHandler}>
          <span>➕</span>Add new list
        </button>
      )}
    </div>
  );
}

export default Sidebar;
