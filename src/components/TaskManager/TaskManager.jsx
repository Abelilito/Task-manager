import React, { useEffect, useState } from "react";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { Filter } from "../Filter/Filter";

export const TaskManager = () => {
  const [task, setTask] = useState([]);
  const [filtered, setFiltered] = useState([]);

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

      <h3>{task.length} tâches restantes</h3>
      <TaskList
        tasks={task}
        setTask={setTask}
        filtered={filtered}
        filterTask={filterTasks}
      />
    </>
  );
};
