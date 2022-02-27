const Joi = require("joi");
const joiPassword = require('joi-password')


 const schema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(8).required(),
    avatar: Joi.string(),
  })

  const clearSchema = Joi.object({
    username: Joi.string().required(),
    clearPassword: Joi.string().required(),
  })

  module.exports = {schema, clearSchema}