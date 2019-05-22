const Joi = require('joi');
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
    path: `/${apiVersion}/permissions/permissionActivities`,
    options: {
      tags: ['api'],
      description: 'Retrieves permissionActivities for a given set of roles.',
      validate: {
        query: {
          roles: Joi.array().items(permissionsModel.roleId),
          method: permissionsModel.method.optional(),
          url: permissionsModel.url.optional(),
        },
        options: { presence: 'required' },
        failAction: failAction('request'),
      },
      response: {
        schema: { data: Joi.array().items(permissionsModel.permissionActivity) },
        failAction: failAction('response'),
      },
      log: { collect: true },
    },
    handler: async (request, h) => await permissionsController.getPermissionActivities(
      request.query.roles,
      request.query.method,
      request.query.url,
      request
    ),
  },

  {
    method: 'GET',
    path: `/${apiVersion}/permissions`,
    options: {
      tags: ['api'],
      description: 'Retrieves a set of permissions for a given set of roles.',
      validate: {
        query: { roles: Joi.array().items(permissionsModel.roleId) },
        options: { presence: 'required' },
        failAction: failAction('request'),
      },
      response: {
        schema: { data: Joi.array().items(permissionsModel.permission) },
        failAction: failAction('response'),
      },
      log: { collect: true },
    },
    handler: async (request, h) => await permissionsController.getPermissionsByRoles(request.query.roles, request),
  },

  {
    method: 'GET',
    path: `/${apiVersion}/permissions/rolePermissions`,
    options: {
      tags: ['api'],
      description: 'Retrieves a list of permissions and their rolePermissions.',
      response: {
        schema: { data: Joi.array().items(permissionsModel.rolePermission) },
        failAction: failAction('response'),
      },
      log: { collect: true },
    },
    handler: async (request, h) => await permissionsController.findRolePermissions(request),
  },

];
