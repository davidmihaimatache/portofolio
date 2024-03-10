/* eslint-disable react/prop-types */
import { useState } from "react";
import { useProjects } from "../../context/ProjectContext";
import "./InputTask.css";
import { getNewItem } from "../../factories/ProjectFactory";
function InputTask() {
  const { activeProject, projects, updateProject } = useProjects();
  const [newTask, setNewTask] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    if (newTask === "" || newTask.replaceAll(" ", "") === "") return;
    const newProject = projects[activeProject];
    newProject.items.push(getNewItem(newTask));
    updateProject(activeProject, newProject);
    setNewTask("");
  }
  return (
    <div className="wrapper">
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          className="input"
          placeholder="➕  Add task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input type="submit" hidden />
      </form>
    </div>
  );
}

export default InputTask;
