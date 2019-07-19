'use strict';

const deepmerge = require('deepmerge');
const config = {};

// default is local cloud9
config['dev-docker'] = {
  hapiOptions: {
    host: '0.0.0.0',
    port: 4044,
  },
  starterKitDB: {
    host: 'db',
    user: 'starter-kit',
    port: 3306,
    database: 'starter-kit',
    connectionLimit: 10,
    acquireTimeout: 60000,
    timeout: 60000,
    password: '3k293cp0tjnMq',
    default: true,
    usePool: true,
  },
  logging: {
    aws: {
      region: 'us-west-2',
      logGroup: '/dev-docker/nora/starter-kit/',
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
config['dev'] = {
  hapiOptions: {
    host: '0.0.0.0',
    port: 5044,
  },
  starterKitDB: {
    host: 'localhost',
    port: 3307,
    password: '3k293cp0tjnMq',
  },
  logging: {
    aws: {
      logGroup: '/dev/nora/starter-kit/',
    },
  },
};

// dev-ecs
config['dev-ecs'] = {
  starterKitDB: {
    host: 'db-nora-dev.cti10lnrh4rb.us-west-2.rds.amazonaws.com',
    ssl: 'Amazon RDS',
    useIAM: true,
    region: 'us-west-2',
  },
  logging: {
    aws: {
      logGroup: '/dev-ecs/nora/starter-kit/',
    },
  },
};

// bi-ecs
config['bi-ecs'] = {
  starterKitDB: {
    host: 'db-nora-bi.science37.com',
    database: 'nora-bi',
    ssl: 'Amazon RDS',
    useIAM: true,
    region: 'us-west-2',
  },
  logging: {
    aws: {
      logGroup: '/bi-ecs/nora/starter-kit/',
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

// build-ecs
config['build-ecs]'] = {
  starterKitDB: {
    host: 'db-nora-build.cti10lnrh4rb.us-west-2.rds.amazonaws.com',
    useIAM: true,
    region: 'us-west-2',
  },
  logging: {
    aws: {
      logGroup: '/build-ecs/nora/starter-kit/',
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

// sandbox-ecs
config['sandbox-ecs'] = {
  starterKitDB: {
    host: 'db-nora-sandbox.cti10lnrh4rb.us-west-2.rds.amazonaws.com',
    ssl: 'Amazon RDS',
    useIAM: true,
    region: 'us-west-2',
  },
  logging: {
    aws: {
      logGroup: '/sandbox-ecs/nora/starter-kit/',
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

// stage-ecs
config['stage-ecs'] = {
  starterKitDB: {
    host: 'db-nora-stage.cti10lnrh4rb.us-west-2.rds.amazonaws.com',
    ssl: 'Amazon RDS',
    useIAM: true,
    region: 'us-west-2',
  },
  logging: {
    aws: {
      logGroup: '/stage-ecs/nora/starter-kit/',
    },
  },
};

// val-ecs
config['val-ecs'] = {
  starterKitDB: {
    host: 'nora-val-public.cjlwp23wi7ub.us-west-2.rds.amazonaws.com',
    ssl: 'Amazon RDS',
    useIAM: true,
    region: 'us-west-2',
  },
  logging: {
    aws: {
      logGroup: '/val-ecs/nora/starter-kit/',
    },
  },
};

// pat-ecs

config['pat-ecs'] = {
  starterKitDB: {
    host: 'db-nora-pat.cjlwp23wi7ub.us-west-2.rds.amazonaws.com',
    ssl: 'Amazon RDS',
    useIAM: true,
    region: 'us-west-2',
  },
  logging: {
    aws: {
      logGroup: '/pat-ecs/nora/starter-kit/',
    },
  },
};

// prod-ecs

config['prod-ecs'] = {
  starterKitDB: {
    host: 'db-nora-prod-master-56.cjlwp23wi7ub.us-west-2.rds.amazonaws.com',
    ssl: 'Amazon RDS',
    useIAM: true,
    region: 'us-west-2',
  },
  logging: {
    aws: {
      logGroup: '/prod-ecs/nora/starter-kit/',
    },
  },
};

// test
config['test'] = {
  starterKitDB: {
    host: 'localhost',
    port: 3307,
  },
  logging: {
    aws: {
      region: 'us-west-2',
      logGroup: '/test/nora/starter-kit/',
    },
    loggers: {
      general: {
        transports: {
          console: true,
          cloudWatch: false,
        },
      },
    },
  },
};
// merge the default config with the environment-specific config
const env = process.env.NODE_ENV ? process.env.NODE_ENV: 'dev-docker';

const mergedConfig = deepmerge(config['dev-docker'], config[env], {
  arrayMerge: (destination, source) => {
    return [ ...destination, ...source];
  },
});

module.exports = mergedConfig;
