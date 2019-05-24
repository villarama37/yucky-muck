const Boom = require('@hapi/boom');
const MyModelDao = require('../dao/MyModel.js')

/*
 * PRIVATE METHODS
 */

/**
* @description example of a private method that should be made available to unit tests only
* @return {Boolean} always returns true
*/
const examplePrivateMethod = () => {
  return true;
};

/*
 * PUBLIC METHODS
 */

module.exports = {};

/**
* @description finds the MyModel instance with the given id
* @param {Number} id - id of MyModel instance
* @param {Object} request - Hapi Request interface
* @return {Promise}
*/
module.exports.findById = async (id, request) => {
  return await MyModelDao.findById(id);
};

/**
 * @description Creates a new object with given data
 * @param {Object} myModel - new object definition
 * @param {Object} request - Hapi Request interface
 * @return {Promise}
 */
module.exports.create = async (myModel, request) => {
  return await MyModelDao.create(myModel)
};

// Export private methods for test
const testEnvs = ['test', 'dev-ecs'];
const exposePrivateMethods = testEnvs.reduce((acc, cur) => acc || cur == process.env.NODE_ENV, false);
if (exposePrivateMethods) module.exports._private_ = { examplePrivateMethod };
