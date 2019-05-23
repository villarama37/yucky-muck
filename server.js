const Hapi = require('hapi');
const Pack = require('./package');
const exampleRoutes = require(__dirname + '/src/routes/v1/MyModel.js');
const plugins = require(__dirname + '/src/plugins/plugins.js');

(async () => {
  const server = await new Hapi.Server({
    host: 'localhost',
    port: 4044,
  });

  // register plugins
  await server.register(plugins);

  try {
    await server.start();
    console.log('Server running at:', server.info.uri);
    console.log('Swagger definition available at:', server.info.uri + '/swagger.json');
  }
  catch (err) {
    console.log(err);
  }

  server.route(exampleRoutes);
})();
