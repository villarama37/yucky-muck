const Joi = require('joi');

// Set of common fields
const common = {
  activityId: Joi.number().integer().optional()
    .description('Activity ID.')
    .example(123),
  roleId: Joi.number().integer().optional()
    .description('Role ID.')
    .example(123),
  permissionId: Joi.number().integer().optional()
    .description('Permission ID.')
    .example(123),
  rolePermissionId: Joi.number().integer().optional()
    .description('RolePermission ID.')
    .example(123),
  permissionActivityId: Joi.number().integer().optional()
    .description('PermissionActivity ID.')
    .example(123),
  method: Joi.string().valid('get', 'delete', 'patch', 'post', 'put', 'head')
    .description('HTTP method of the request.')
    .example('get'),
  url: Joi.string()
    .description('URL of the request.')
    .example('/comments/1234'),
  scope: Joi.string().valid('global', 'owner', 'self', 'trial')
    .description('Authorized scope for the given activity.')
    .example('owner'),
};

common.activity = {
  activityId: common.activityId,
  method: common.method,
  url: common.url,
};

common.permission = {
  permissionId: common.permissionId,
  name: Joi.string()
    .description('Friendly name of the permission.')
    .example('Trial Administration'),
};

common.rolePermission = {
  roleId: common.roleId,
  rolePermissionId: common.rolePermissionId,
  permission: common.permission,
};

common.permissionActivity = {
  permissionActivityId: common.permissionActivityId,
  scope: common.scope,
  permission: common.permission,
  activity: common.activity,
};

common.calculationRequest = {
  roles: Joi.array().items(common.roleId)
    .description('Array of roleIds of the requestor.')
    .example([1, 2, 3]),
  method: common.method,
  url: common.url,
};

module.exports = common;
