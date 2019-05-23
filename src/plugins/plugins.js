const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../../package');

const plugins = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: {
      info: {
        title: 'Test API Documentation',
        version: Pack.version,
      },
    },
  },
];

module.exports = plugins;
