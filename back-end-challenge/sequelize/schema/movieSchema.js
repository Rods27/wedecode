const yup = require('yup');

const movieSchema = yup.object().shape({
  name: yup.string()
    .min(1, '"name" is required')
    .required('"name" is required')
    .max(100, '"name" max length is 100 characters.'),
  description: yup.string()
    .required('"description" is required')
    .min(1, '"description" is required')
    .max(700, '"description" max length is 700 characters.'),
  year: yup.string()
    .required('"year" is required')
    .min(4, '"year" min length is 4 characters.')
    .max(4, '"year" max length is 4 characters.')
});

module.exports = { movieSchema };