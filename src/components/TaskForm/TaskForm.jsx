import { Form, Formik, useFormik } from "formik";
import { FormFields } from "../FormFields/FormFields";
import s from "./style.module.css";
import { CustomButton } from "../CustomButton/CustomButton";

export const TaskForm = ({ task, setTask, filterTasks }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      priority: "",
    },
    validateOnChange: true,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  function handleSubmit(values) {
    let newItem = {
      id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
      title: values.title,
      priority: values.priority,
      done: false,
    };

    setTask([...task, newItem]);
    filterTasks();
    formik.resetForm();
  }

  return (
    <>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <div className={s.mb8}>
            <FormFields formik={formik} />
          </div>

          <CustomButton formik={formik} text={"Ajouter"} color={"btn-submit"} />
        </Form>
      </Formik>
    </>
  );
};
