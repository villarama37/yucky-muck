const _ = require('lodash');

const config = require('./config.js');

const defaultConfig = config.local;
const environment = process.env.NODE_ENV || 'dev';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

console.log(finalConfig);