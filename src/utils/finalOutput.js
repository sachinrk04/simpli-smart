export const transformInput = (inputs, data) => {
  inputs.forEach((item) => {
    item[item.name] = data[item.name];
  });

  return inputs;
};
