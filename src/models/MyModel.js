const Joi = require('@hapi/joi');

const MyModel = Joi.object().keys({
  id: Joi.number().integer().required()
    .description('ID of the example model'),
  description: Joi.string()
    .description('Description of the example model'),
})
.description('example model definition').label('MyModel');

module.exports = MyModel;
