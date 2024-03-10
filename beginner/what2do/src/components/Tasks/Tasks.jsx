/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useProjects } from "../../context/ProjectContext";
import "./Tasks.css";
function Tasks({ project, index }) {
  const { updateProject } = useProjects();
  function check(task, i) {
    const updatedProject = { ...project };
    updatedProject.items[i].done = !updatedProject.items[i].done;
    updateProject(index, updatedProject);
  }
  return (
    <div className="tasksContainer">
      {project.items?.map((task, i) => (
        <div key={task.name} className="taskContainer">
          <button
            type="button"
            role="checkbox"
            className="checkbox"
            onClick={() => check(task, i)}
          >
            <div className={`asset ${task.done && "asset-checked"}`}>
              <svg width="12" height="12" viewBox="0 0 14 12">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  stroke="#a6a6a6"
                  strokeWidth=".4"
                  d="M4.959 9.263l6.792-8.015a.71.71 0 0 1 .995-.082c.3.249.34.69.09.984l-7.29 8.602a.706.706 0 0 1-.708.228.706.706 0 0 1-.483-.248L1.165 6.97a.694.694 0 0 1 .09-.987.712.712 0 0 1 .996.085l2.708 3.195z"
                ></path>
              </svg>
            </div>
          </button>
          <p className={task.done && "done"}>{task.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
