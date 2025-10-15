import React, { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";

export const Filter = ({ filterTasks }) => {
  return (
    <>
      <div>Filter:</div>
      <CustomButton
        text="Toutes les tâches"
        color=""
        fn={() => filterTasks()}
      />
      <CustomButton text="Terminé" color="" fn={() => filterTasks("done")} />

      <CustomButton
        text="En cours"
        color=""
        fn={() => filterTasks("inProgress")}
      />
    </>
  );
};
