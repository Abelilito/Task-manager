import { useEffect, useState } from "react";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { Filter } from "../Filter/Filter";

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
        setFiltered(taskList);
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
    <>
      <TaskForm task={task} setTask={setTask} filterTasks={filterTasks} />
      <Filter filterTasks={filterTasks} />

      <TaskList
        tasks={task}
        setTask={setTask}
        filtered={filtered}
        filterTask={filterTasks}
      />
    </>
  );
};
