import { Checkboxe } from "../Checkboxe/Checkboxe";
import { CustomButton } from "../CustomButton/CustomButton";
import { Filter } from "../Filter/Filter";

export const TaskList = ({ tasks, setTask, filtered, filterTask }) => {
  function filteredCount() {
    if (filtered.length === 0 || filtered.length === 1) {
      return <h3 className="font-bold">{filtered.length} tâche</h3>;
    } else {
      return <h3 className="font-bold">{filtered.length} tâches</h3>;
    }
  }

  function handleDeleteTask(item) {
    const itemIndex = filtered.findIndex((task) => task.id === item.id);
    filtered.splice(itemIndex, 1);
    setTask([...filtered]);
  }

  function status(item) {
    if (item.done) {
      return (
        <span className="bg-[#5BB98B] px-[15px] py-[5px] rounded-md text-[13px]">
          Terminée
        </span>
      );
    } else {
      return (
        <span className="bg-[#D5AE39] px-[15px] py-[5px] rounded-md text-[13px]">
          En cours
        </span>
      );
    }
  }

  if (filtered.length > 0) {
    return (
      <>
        <div className="top-[14rem] sticky bg-[#f9f9f9] w-full flex flex-col items-center">
          <Filter filterTasks={filterTask} />
          <div className="my-8">{filteredCount()}</div>
        </div>

        <div className="w-full grid justify-center gap-4 grid-cols-[repeat(auto-fit,_100%)] md:grid-cols-[repeat(auto-fit,_24rem)]">
          {filtered.map((task, index) => (
            <div
              key={index}
              className="border border-solid border-[#737373] p-4 rounded-md"
            >
              <div className="flex gap-8 mb-8 items-start justify-between">
                <div className="flex flex-col">
                  <div className="text-xl font-bold mb-4">{task.title}</div>
                  <div className="text-[14px]">
                    Priorité :{" "}
                    <span className="font-bold">{task.priority}</span>
                  </div>
                  <Checkboxe
                    text="Cochez si la tâche est terminée"
                    tasks={tasks}
                    item={task}
                    setTask={setTask}
                    filterTask={filterTask}
                  />
                </div>
                {status(task)}
              </div>

              <CustomButton
                text="Supprimé"
                classes="bg-[#E5484D] text-white py-[10px] text-[14px]"
                fn={() => handleDeleteTask(task)}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
};
