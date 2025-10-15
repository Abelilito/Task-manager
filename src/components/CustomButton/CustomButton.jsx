export const CustomButton = ({ formik, text, classes, fn, id }) => {
  if (formik) {
    return (
      <>
        <button
          type="submit"
          disabled={!formik.isValid || !formik.dirty}
          className={
            classes + " p-[15px] text-[1rem] rounded-md font-medium font-sans"
          }
        >
          {text}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          className={classes + " px-[15px] rounded-md font-medium font-sans"}
          onClick={fn}
        >
          {text}
        </button>
      </>
    );
  }
};
