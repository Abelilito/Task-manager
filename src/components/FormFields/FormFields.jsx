import { Field } from "formik";
import s from "./style.module.css";

export const FormFields = ({ formik }) => {
  return (
    <div className={s.container}>
      <label className={s.labelContainer}>
        <span>Nom de la tâche</span>
        <Field
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          required
        />
      </label>

      <label className={s.labelContainer}>
        <span>Priorité</span>
        <Field
          as="select"
          name="priority"
          value={formik.values.priority}
          onChange={formik.handleChange}
          required
        >
          <option value=""></option>
          <option value="Basse">Basse</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Haute">Haute</option>
        </Field>
      </label>
    </div>
  );
};
