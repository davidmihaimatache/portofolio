/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ProjectContext = createContext();

function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  function addProject(newProject) {
    setProjects((projects) => [...projects, newProject]);
  }
  function updateProject(index, newProject) {
    setProjects((projects) =>
      projects.map((project, i) => {
        if (index === i) return newProject;
        return project;
      })
    );
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        activeProject,
        setActiveProject,
        updateProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined)
    throw new Error(
      "ProjectContext was used outside of ProjectContextProvider"
    );
  return context;
}

export { ProjectContextProvider, useProjects };
