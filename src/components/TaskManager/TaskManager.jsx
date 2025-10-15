import { useEffect, useState } from "react";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";

export const TaskManager = () => {
  const [task, setTask] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(task);
  }, [task]);

  function filterTasks(filterType) {
    let taskList;
    switch (filterType) {
      case "done":
        taskList = task.filter((item) => item.done);
        if (taskList.length > 0) {
          setFiltered(taskList);
        }
        break;
      case "inProgress":
        taskList = task.filter((item) => !item.done);
        setFiltered(taskList);
        break;
      default:
        setFiltered(task);
        break;
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="top-0 sticky bg-[#f9f9f9] w-full pt-[2rem]">
        <TaskForm task={task} setTask={setTask} filterTasks={filterTasks} />
      </div>

      <TaskList
        tasks={task}
        setTask={setTask}
        filtered={filtered}
        filterTask={filterTasks}
      />
    </div>
  );
};
