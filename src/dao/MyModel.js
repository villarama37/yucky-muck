const Boom = require('@hapi/boom');

module.exports = {
  /**
   * @description Retrieves Object with given ID
   * @param {Number} id - Object ID to retrieve
   * @return {Promise}
   */
  findById: async id => {
    throw Boom.notImplemented();
  },

  /**
  * @description Creates a new object with given data
  * @param {Object} myModel - Object representing the new object
  * @return {Promise}
  */
  create: async myModel => {
    throw Boom.notImplemented();
  },
};
