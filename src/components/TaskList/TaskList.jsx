import { CustomButton } from "../CustomButton/CustomButton";

export const TaskList = ({ tasks, setTask, filtered, filterTask }) => {
  function filteredCount() {
    if (filtered.length === 0 || filtered.length === 1) {
      return <h3>{filtered.length} tâche</h3>;
    } else {
      return <h3>{filtered.length} tâches</h3>;
    }
  }

  function handleChangeStatus(e, task) {
    const updatedTask = tasks.map((item) =>
      item.id === task.id ? { ...item, done: !item.done } : item
    );
    setTask(updatedTask);
    filterTask();
  }

  function handleDeleteTask(item) {
    const itemIndex = filtered.findIndex((task) => task.id === item.id);
    filtered.splice(itemIndex, 1);
    setTask([...filtered]);
  }

  return (
    <>
      {filteredCount()}
      <div className="container-list">
        {filtered.map((task, index) => (
          <div key={index}>
            <div className="flex gap-8 mb-8 task-wrapper">
              <div className="flex flex-col">
                <div>Tâche : {task.title}</div>
                <div>Priorité : {task.priority}</div>
                <div>
                  <input
                    id={"checkbox-" + task.id}
                    type="checkbox"
                    name="completed"
                    defaultChecked={task.done}
                    onChange={(e) => handleChangeStatus(e, task)}
                  />
                  <label htmlFor={"checkbox-" + task.id}>
                    Cochez si la tâche est terminée
                  </label>
                </div>
              </div>
              <span className={task.done ? "green-10 tag" : "yellow-5 tag"}>
                Terminée
              </span>
            </div>

            <CustomButton
              text="Supprimé"
              color="red-11"
              fn={() => handleDeleteTask(task)}
            />
          </div>
        ))}
      </div>
    </>
  );
};
