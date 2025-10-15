import { Field } from "formik";
import ChevronDown from "../ChevronDown";

export const FormFields = ({ formik }) => {
  return (
    <>
      <Field
        type="text"
        name="title"
        className="
          w-full md:w-[43%] lg:w-[28%] border-[#737373] border border-solid p-[1rem] bg-transparent rounded-md text-[0.8rem] 
          focus:border-[#D8D0BF] focus-visible:outline-none placeholder:text-[#8D8D8D]
        "
        placeholder="Nom de la tâche"
        value={formik.values.title}
        onChange={formik.handleChange}
        required
      />

      <div className="relative inline-block w-full md:w-[43%] lg:w-[28%]">
        <div className="relative inline-block w-full">
          <select
            name="priority"
            className="
              appearance-none w-full border-[#737373] border border-solid p-[1rem] bg-transparent rounded-md text-[0.8rem] 
            focus:border-[#D8D0BF] focus-visible:outline-none invalid:text-[#8D8D8D]
            "
            value={formik.values.priority}
            onChange={formik.handleChange}
            required
          >
            <option value="">Priorité de la tâche</option>
            <option value="Basse">Basse</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Haute">Haute</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 w-[43px]">
            <ChevronDown />
          </div>
        </div>
      </div>
    </>
  );
};
