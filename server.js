const Hapi = require('@hapi/hapi');
const tokenRoute = require(__dirname + '/src/routes/v1/auth/token');
const plugins = require(__dirname + '/src/plugins/plugins');
const healthcheckRoute = require(__dirname + '/src/routes/version');
const config = require(__dirname + '/config.js');

/**
* @description registers server plugins and starts a hapi server
* @return {Object} returns the started hapi server
*/
const start = async () => {
  const server = await new Hapi.Server(config.hapiOptions);
  try {
    // register plugins
    await server.register(plugins);
    // add routes
    server.route(tokenRoute);
    server.route(healthcheckRoute);

    // start server
    await server.start();
    // console.log('Server running at:', server.info.uri);
    return server;
  }
  catch (err) {
    console.log(err);
  }
};

if (!module.parent) start();

module.exports = { start };
