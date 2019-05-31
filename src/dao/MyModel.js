'use strict';

module.exports = {
  /**
   * @description Retrieves Object with given ID
   * @param {Number} id - Object ID to retrieve
   * @param {Object} request - Hapi Request interface
   * @return {Promise}
   */
  findById: async (id, request) => {
    const connection = request.app.db.connection;
    const sql = `
      SELECT * FROM MyModel
      WHERE id = ${connection.escape(id)}
    `;
    const [results] = await connection.query(sql);
    return results.length > 0 ? results[0] : null;
  },

  /**
  * @description Creates a new object with given data
  * @param {Object} myModel - Object representing the new object
  * @param {Object} request - Hapi Request interface
  * @return {Promise}
  */
  create: async (myModel, request) => {
    const connection = request.app.db.connection;
    const sql = `
      INSERT INTO MyModel
      (${Object.keys(myModel).join(',')})
      VALUES
      (${Object.values(myModel).map(val => connection.escape(val)).join(',')})
    `;
    const [results] = await connection.query(sql);
    return results.insertId;
  },
};
