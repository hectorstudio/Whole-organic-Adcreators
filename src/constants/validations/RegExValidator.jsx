import validate from "validator-react";

const validator = (formFields, rules) => {
  const validRes = validate(formFields, rules);
  return validRes;
};

export default validator;
