import { useState } from "react";

const useInput = (defaultValue, validationFn) => {
  const [formValue, setFormValue] = useState(defaultValue);
  const [formEdit, setFormEdit] = useState(false);

  const isNotValid = validationFn(formValue);

  const onInputChange = (event) => {
    setFormValue(event.target.value);
    setFormEdit(false);
  };

  const onInputBlur = () => {
    setFormEdit(true);
  };

  return {
    value: formValue,
    isNotValid : formEdit && isNotValid,
    inputChange: onInputChange,
    inputBlur: onInputBlur,
  };
};

export default useInput;
