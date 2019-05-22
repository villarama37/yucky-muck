const Joi = require('@hapi/joi');

const MyModel = {
  id: Joi.number().integer()
    .description('ID of the example model'),
  description: Joi.string()
    .description('Description of the example model'),
};

module.exports = MyModel;
