export const ADD_DOG_VALIDATION_RULES = [
  {
    field: "name",
    required: true,
    type: "string",
  },
  {
    field: "weight",
    required: true,
    type: "number",
  },
  {
    field: "height",
    required: true,
    type: "number",
  },
  {
    field: "lifeExpectancy",
    required: true,
    type: "number",
  },
];

export const DOG_BREED_FIELDS = {
  name: "Name",
  weight: "Weight",
  height: "Height",
  lifeExpectancy: "Life Expectancy",
};
