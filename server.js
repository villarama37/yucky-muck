const Hapi = require('hapi');
const exampleRoutes = require(__dirname + '/src/routes/v2/MyModel.js');
const plugins = require(__dirname + '/src/plugins/plugins.js');

(async () => {
  const server = await new Hapi.Server({
    host: '0.0.0.0',
    port: 4044,
  });

  try {
    // register plugins
    await server.register(plugins);
    // add routes
    server.route(exampleRoutes);
    // start server
    await server.start();
    console.log('Server running at:', server.info.uri);
    console.log('Swagger definition available at:', server.info.uri + '/swagger.json');
  }
  catch (err) {
    console.log(err);
  }

})();
