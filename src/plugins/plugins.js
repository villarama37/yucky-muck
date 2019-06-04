const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require(__dirname + '/../../package');
const db = require('nora-mysql-plugin');
const noraLogger = require('nora-logger-plugin');
const config = require(__dirname + '/../../config.js');

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
  { plugin: db.mysql, options: config.starterKitDB },
  { plugin: noraLogger.logging, options: config },
  { plugin: noraLogger.listeners, options: config },
];

module.exports = plugins;
