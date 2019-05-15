'use strict';

const config = {};

// default is dev
config.dev = {
  hapiOptions: {
    host: '0.0.0.0',
    port: 11116,
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
  aws: {
    region: 'us-west-2',
    auditHistoryTable: 'NORAAuditHistoryDEV',
    auditHistoryMetaTable: 'NORAAuditHistoryMetaDEV',
    s3LargeHistoryBucket: 'nora-dev-private',
    elasticSearch: {
      host: 'https://search-audit-history-dev-qjugiqgkm7w2fqf2btukeoshpu.us-west-2.es.amazonaws.com',
      log: 'trace',
      index: 'auditlog',
      type: 'entries',
    }
  },
}

// bi-ecs
config.bi_ecs = {
  coreDB: {
    host: 'db-nora-bi.science37.com',
    database: 'nora-bi',
  },
  noraCore: {
    host: 'monolith',
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
}

// build_ecs
config.build_ecs = {
  coreDB: {
    host: 'db-nora-build.science37.com',
  },
  noraCore: {
    host: 'monolith',
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
}

module.exports = config;