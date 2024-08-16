export const validateForm = (modelSpace, setFormErrors, inputs) => {
  const errors = {};
  modelSpace.inputs.forEach((input) => {
    if (input.required && !inputs[input.name]) {
      errors[input.name] = true;
    }
  });
  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};
