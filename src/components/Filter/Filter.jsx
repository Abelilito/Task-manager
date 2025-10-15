import React, { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";

export const Filter = ({ filterTasks }) => {
  const tabs = [
    {
      name: "Toutes les tâches",
      filterEvent: () => filterTasks(),
    },
    {
      name: "Terminé",
      filterEvent: () => filterTasks("done"),
    },
    {
      name: "En cours",
      filterEvent: () => filterTasks("inProgress"),
    },
  ];
  return (
    <div className="flex gap-4 mt-8">
      {tabs.map((tab, index) => (
        <div key={index}>
          <CustomButton
            text={tab.name}
            classes="border border-solid border-black hover:bg-[#6d28d9] hover:text-white py-[7px] text-[14px]"
            fn={tab.filterEvent}
          />
        </div>
      ))}
    </div>
  );
};
