const rules = [
  {
    field: "email",
    validations: ["required", "email"],
    name: "User email" // used to show in error message
  },
  {
    field: "password",
    validations: ["required", "password"],
    name: "Password" // used to show in error message
  }
];

export default rules;
