const Boom = require('boom');
const MyModel = require(__dirname + '/../../models/MyModel.js');

// Get api version for this route from the directory name
const apiVersion = __dirname.match(/routes\/(v\d+)/)[1];

/**
 * @description Universal hapi failAction function for validation requests
 * @param {string} type - type of validation -- 'request' or 'response'
 * @return {function} failAction lifecycle function
 */
const failAction = type => async (request, h, err) => {
  request.log(err);
  return type === 'request' ?
    Boom.badRequest(`Invalid request payload input: ${err.message}`) :
    Boom.badImplementation(`Invalid response payload output`);
};

module.exports = [

  {
    method: 'GET',
    path: `/${apiVersion}/MyModels/{id}`,
    options: {
      tags: ['api'],
      description: 'Get the MyModel that has the supplied id.',
      validate: {
        params: {
          id: MyModel.id,
        },
        options: { presence: 'required' },
        failAction: failAction('request'),
      },
      response: {
        schema: MyModel,
        failAction: failAction('response'),
      },
      log: { collect: true },
      auth: false,
    },
    handler: async (request, h) => {
      console.log('my handler is being called');
      return { id: 0, description: 'example description'};
    },
  },

];
