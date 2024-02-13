/* eslint-disable no-unused-vars */

import { useForm } from "react-hook-form";
import classes from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch,
  } = useForm();

  const [binary, setBinary] = useState(null);
  const [result, setResult] = useState(null);

  const onSubmit = function (data) {
    if (data.binary.includes(".")) {
      setResult(0);
      setBinary(0);
      console.log(result, binary);
      setError("binary", {
        type: "pattern",
        message: "You can only input '0' and '1'",
      });
      return;
    } else clearErrors("pattern");
    const number = parseInt(parseInt(data.binary, 2));
    if (!number) {
      console.log(number);
      setResult(null);
      setBinary(null);
      return;
    }
    setResult(number);
    setBinary(data.binary);
  };

  const current = watch("binary");
  useEffect(
    function () {
      if (current !== "") return;
      setResult(null);
      setBinary(null);
    },
    [current]
  );
  return (
    <div className={classes.app}>
      <h2>Bin 2 Dec</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <input
          title="Press enter to submit"
          placeholder="10101010"
          type="text"
          {...register("binary", {
            pattern: {
              value: /(0|1){1,8}/,
              message: "You can only input '0' and '1'",
            },
            required: {
              value: true,
              message: "This field is required",
            },
            maxLength: {
              value: 8,
              message: "Maximum length is 8 bytes",
            },
          })}
        />
        {errors.binary && (
          <p className={classes.error} role="alert">
            {errors.binary.message}
          </p>
        )}
        {result && (
          <p role="alert" className={classes.result}>
            {binary} converted in decimal: <strong>{result}</strong>
          </p>
        )}
      </form>
    </div>
  );
}

export default App;
