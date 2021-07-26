const yup = require('yup');

const viewerSchema = yup.object().shape({
  userId: yup.string()
    .min(1, '"userId" is required')
    .required('"userId" is required'),
  movieId: yup.string()
    .min(1, '"movieId" is not allowed to be empty')
    .required('"movieId" is required'),
});

module.exports = { viewerSchema };