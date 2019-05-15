'use strict';

const config = {};

// default is dev
config.dev = {
  notificationsFeatureEnabled: true,
  hapiOptions: {
    host: '0.0.0.0',
    port: 11116,
  },
  notificationDB: {
    host: 'db-nora-dev.cti10lnrh4rb.us-west-2.rds.amazonaws.com',
    user: 'admin',
    port: 3306,
    password: 'n0r4123!',
    database: 'notification',
    ssl: 'Amazon RDS',
    connectionLimit: 10,
  },
  coreDB: {
    host: 'db-nora-dev.cti10lnrh4rb.us-west-2.rds.amazonaws.com',
    user: 'admin',
    port: 3306,
    password: 'n0r4123!',
    database: 'nora',
    ssl: 'Amazon RDS',
    connectionLimit: 10,
  },
  noraCore: {
    protocol: 'http',
    host: 'localhost',
    port: 3005,
    prefix: '/api',
  },
  email: {
    aws: {
      region: 'us-west-2',
    },
    noreplyAddress: 'no-reply@science37.com',
    loginAddress: 'https://dev.nora.science37.com',
  },
  logging: {
    aws: {
      region: 'us-west-2',
      logGroup: '/dev-ecs/nora/notifications-api/',
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
  auditLog: {
    aws: {
      auditHistoryTable: 'NORAAuditHistoryDEV',
    },
  },
  permissions: {
    aws: {
      region: 'us-west-2',
      secretId: 'dev/ApiGateway/JwtRsaPublicKey',
    },
  },
  toggles: {
    features: [
      {
        key: 'QUERY_MANAGEMENT',
        name: 'Query Management',
        version: '2.14.0',
        description: 'https://science37.atlassian.net/browse/TE-1061',
      },
    ],
  },
  cache: {
    defaultScheme: 'lru',
    defaultMaxAge: 15 * 60 * 1000,
    defaultMax: 500,
  },
}

// bi-ecs
config.bi_ecs = {
  notificationDB : {
    host: 'db-nora-bi.science37.com',
    database: 'notification-bi',
  },
  coreDB: {
    host: 'db-nora-bi.science37.com',
    database: 'nora-bi',
  },
  noraCore: {
    host: 'monolith',
  },
  email: {
    loginAddress: 'https://bi-sandbox.nora.science37.com',
  },
  logging: {
    aws: {
      logGroup: '/bi-ecs/nora/notifications/',
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
  auditLog: {
    aws: {
      auditHistoryTable: 'NORAAuditHistoryBI',
    },
  },
  toggles: {
    features: [
      {
        key: 'QUERY_MANAGEMENT',
        name: 'Query Management',
        version: '99.99.99',
        description: 'https://science37.atlassian.net/browse/TE-1061',
      },
    ],
  },
}

// build_ecs
config.build_ecs = {
  notificationDB: {
    host: 'db-nora-build.science37.com',
  },
  coreDB: {
    host: 'db-nora-build.science37.com',
  },
  noraCore: {
    host: 'monolith',
  },
  email: {
    loginAddress: 'https://build.nora.science37.com',
  },
  logging: {
    aws: {
      logGroup: '/bi-ecs/nora/notifications/',
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
  auditLog: {
    aws: {
      auditHistoryTable: 'NORAAuditHistoryBUILD',
    },
  },
}

module.exports = config;