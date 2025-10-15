import { Form, Formik, useFormik } from "formik";
import { FormFields } from "../FormFields/FormFields";
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
        <Form onSubmit={formik.handleSubmit} className="w-full">
          <div className="w-full text-center flex flex-col items-center gap-4">
            <FormFields formik={formik} />
            <CustomButton
              formik={formik}
              text={"Ajouter"}
              classes="bg-[#6d28d9] border-[#6d28d9] text-white w-full md:w-[43%] lg:w-[28%]"
            />
          </div>
        </Form>
      </Formik>
    </>
  );
};
