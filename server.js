const Hapi = require('hapi');
const exampleRoutes = require(__dirname + '/src/routes/v2/hapistarterkit/MyModel.js');
const healthcheckRoute = require(__dirname + '/src/routes/version.js');
const plugins = require(__dirname + '/src/plugins/plugins.js');
const config = require(__dirname + '/config.js');

(async () => {
  const server = await new Hapi.Server(config.hapiOptions);

  try {
    // register plugins
    await server.register(plugins);
    // add routes
    server.route(exampleRoutes);
    server.route(healthcheckRoute);
    // start server
    await server.start();
    console.log('Server running at:', server.info.uri);
    console.log('Swagger definition available at:', server.info.uri + '/swagger.json');
  }
  catch (err) {
    console.log(err);
  }

})();
