export const CustomButton = ({ formik, text, color, fn, id }) => {
  if (formik) {
    return (
      <>
        <button
          type="submit"
          disabled={!formik.isValid || !formik.dirty}
          className={color}
        >
          {text}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className={color} onClick={fn}>
          {text}
        </button>
      </>
    );
  }
};
