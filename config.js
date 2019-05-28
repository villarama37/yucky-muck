'use strict';

const config = {};

// default is local cloud9
config.local = {
  hapiOptions: {
    host: '0.0.0.0',
    port: 11116,
  },
  coreDB: {
    host: 'db',
    user: 'admin',
    port: 3306,
    database: 'nora',
    connectionLimit: 10,
    acquireTimeout: 60000,
    timeout: 60000
  },
  logging: {
    aws: {
      region: 'us-west-2',
      logGroup: '/dev-docker/nora/core/', //Replace 'core' with appropriate service
    },
    redactFields: [
    ],
    loggers: {
      general: {
        transports: {
          errorFile: false,
          allFile: false,
          console: false,
          cloudWatch: true,
        },
      },
    },
    levels: {
      eventlog: {
        'default': 'info',
        '4..': 'warn',
        '5..': 'error',
      },
    },
  },
};

// dev
config.dev = {
  coreDB: {
    host: 'localhost',
    user: 'nora',
    port: 3307,
    password: '3k293cp0tjnMq',
  },
  logging: {
    aws: {
      logGroup: '/dev/nora/core/', //Replace 'core' with appropriate service
    },
  },
};

// dev-ecs
config.dev_ecs = {
  coreDB: {
    host: 'db-nora-dev.cti10lnrh4rb.us-west-2.rds.amazonaws.com',
    ssl: 'Amazon RDS',
  },
  logging: {
    aws: {
      logGroup: '/dev-ecs/nora/core/', //Replace 'core' with appropriate service
    },
  },
};

// bi-ecs
config.bi = {
  coreDB: {
    host: 'db-nora-bi.science37.com',
    database: 'nora-bi',
    ssl: 'Amazon RDS',
  },
  logging: {
    aws: {
      logGroup: '/bi-ecs/nora/core/', //Replace 'core' with appropriate service
    },
    loggers: {
      general: {
        transports: {
          console: true,
        },
      },
    },
    levels: {
      eventlog: {
        'default': 'warn',
      },
    },
  },
};

// build_ecs
config.build = {
  coreDB: {
    host: 'db-nora-build.science37.com',
  },
  logging: {
    aws: {
      logGroup: '/build-ecs/nora/core/', //Replace 'core' with appropriate service
    },
    loggers: {
      general: {
        transports: {
          console: true,
        },
      },
    },
    levels: {
      eventlog: {
        'default': 'warn',
      },
    },
  },
};

// sandbox_ecs
config.sandbox = {
  coreDB: {
    host: 'db-nora-sandbox.science37.com',
    ssl: 'Amazon RDS',
  },
  logging: {
    aws: {
      logGroup: '/sandbox-ecs/nora/core/', //Replace 'core' with appropriate service
    },
    loggers: {
      general: {
        transports: {
          console: true,
        },
      },
    },
    levels: {
      eventlog: {
        'default': 'warn',
      },
    },    
  },
};

// stage_ecs
config.test = {
  coreDB: {
    host: 'db-nora-stage.cti10lnrh4rb.us-west-2.rds.amazonaws.com',
    ssl: 'Amazon RDS',
  },
  logging: {
    aws: {
      logGroup: '/stage-ecs/nora/core/', //Replace 'core' with appropriate service
    },
  },
};

// test
config.test = {
  coreDB: {
    host: 'localhost',
    user: 'nora',
    port: 3307,
  },
  logging: {
    aws: {
      region: 'us-west-2',
      logGroup: '/test/nora/core/', //Replace 'core' with appropriate service
    },
    loggers: {
      general: {
        transports: {
          console: true,
          cloudWatch: false,
        },
      },
    },
  }
};


module.exports = config;