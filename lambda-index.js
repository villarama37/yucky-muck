const config = require(__dirname + '/config.js');
const server = require(__dirname + '/server.js');

exports.handler = async requestOptions => {
  console.log({requestOptions});
  const request = {
    method: requestOptions.method || requestOptions.httpMethod,
    url: `http://${config.hapiOptions.host}:${config.hapiOptions.port}${requestOptions.path}`,
    payload: requestOptions.payload || requestOptions.body,
  };
  let hapiServer;
  try {
    hapiServer = await server.start();
    console.log({request});
    const { statusCode, result } = await hapiServer.inject(request);
    const body = JSON.stringify(result);
    return { statusCode, body };
  }
  catch (error) {
    return { statusCode: 500, body: error.message };
  }
  finally {
    if (hapiServer) {
      await hapiServer.stop();
    }
  }

};
