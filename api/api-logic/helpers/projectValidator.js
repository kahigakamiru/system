const Joi = require("joi");

exports.projectValidator = (project) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().min(5).required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
  });

  return schema.validate(project);
};
