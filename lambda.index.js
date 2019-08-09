const config = require(__dirname + '/config.js');
const server = require(__dirname + '/server.js');

exports.handler = async requestOptions => {
  console.log(__dirname + '/config.js');
  console.log(__dirname + '/server.js');
  const request = {
    method: requestOptions.method,
    url: `http://${config.hapiOptions.host}:${config.hapiOptions.port}${requestOptions.path}`,
    payload: requestOptions.payload,
    validate: false,
  };
  let hapiServer;
  try {
    hapiServer = await server.start();
    const { result } = await hapiServer.inject(request);
    await hapiServer.stop();
    return result;
  }
  catch (error) {
    if (hapiServer) {
      await hapiServer.stop();
    }
    console.log('studio lambda error is :', error);
    throw error;
  }
};
