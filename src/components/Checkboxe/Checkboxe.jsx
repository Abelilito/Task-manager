export const Checkboxe = ({ text, tasks, item, setTask, filterTask }) => {
  function handleChangeStatus(e, task) {
    const updatedTask = tasks.map((item) =>
      item.id === task.id ? { ...item, done: !item.done } : item
    );
    setTask(updatedTask);
    filterTask();
  }

  return (
    <>
      <div className="flex items-center gap-[5px]">
        <input
          id={"checkbox-" + item.id}
          type="checkbox"
          name="completed"
          className="checked:accent-[#6d28d9]"
          defaultChecked={item.done}
          onChange={(e) => handleChangeStatus(e, item)}
        />
        <label htmlFor={"checkbox-" + item.id} className="text-[14px]">
          {text}
        </label>
      </div>
    </>
  );
};
