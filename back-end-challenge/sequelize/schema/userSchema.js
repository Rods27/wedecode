const yup = require('yup');

const userSchema = yup.object().shape({
  name: yup.string()
    .min(5, '"name" length must be at least 8 characters long')
    .required('"name" is required'),
  email: yup.string()
    .email('"email" must be a valid email')
    .min(1, '"email" is not allowed to be empty')
    .required('"email" is required'),
  password: yup.string()
    .min(6, '"password" length must be 6 characters long')
    .required('"password" is required'),
});

module.exports = { userSchema };