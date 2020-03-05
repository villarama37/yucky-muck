const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

// Get api version for this route from the directory name
const pathParts = __dirname.match(/routes\/(v\d+)\/([^/]+)/);
const apiVersion = pathParts[1];
const dig = require('object-dig');

/**
 * @description Universal hapi failAction function for validation requests
 * @param {string} type - type of validation -- 'request' or 'response'
 * @return {function} failAction lifecycle function
 */
const failAction = type => async (request, h, err) => {
  request.log(err);
  return type === 'request' ? Boom.badRequest(`Invalid request payload input: ${err.message}`)
    : Boom.badImplementation(`Invalid response payload output`);
};

const normalResponse = {
  commands: [
    {
      type: 'com.okta.access.patch',
      value: [
        {
          op: 'add',
          path: '/claims/sessionPermissions',
          value: [
            'viewTrial',
            'viewSite',
            'viewRefData',
            'manageLeads',
            'receiveNotifications',
            'managePatientSchedule',
            'viewPatientSchedule',
            'viewOwnSchedule',
            ' managePatientSettings',
            'manageContacts',
            'viewMyPatients',
            'viewMyTrialContacts',
            'acccessMyPatientForms',
            'fillOutAnyForms',
            'viewUnblindedAnsweredForms',
            'viewBlindedForms',
          ].join(','),
        },
      ],
    },
    {
      type: 'com.okta.access.patch',
      value: [
        {
          op: 'add',
          path: '/claims/sessionRoles',
          value: 'CRC,LeadAdmin',
        },
      ],
    },
    {
      type: 'com.okta.access.patch',
      value: [
        {
          op: 'add',
          path: '/claims/sessionScope',
          value: 'site/F0384685-F87D-474B-848D-2058AC5655A7',
        },
      ],
    },
  ],
};

const davidResponse = {
  commands: [
    {
      type: 'com.okta.access.patch',
      value: [
        {
          op: 'add',
          path: '/claims/sessionPermissions',
          value: ['viewTrial', 'viewSite', 'viewRefData', 'managePatientSchedule',
            'viewPatientSchedule', 'viewMyPatient', 'accessMyPatientForms'].join(','),
        },
      ],
    },
    {
      type: 'com.okta.access.patch',
      value: [
        {
          op: 'add',
          path: '/claims/sessionRoles',
          value: 'Nurse',
        },
      ],
    },
    {
      type: 'com.okta.access.patch',
      value: [
        {
          op: 'add',
          path: '/claims/sessionScope',
          value: 'site/4BD3BEA1-3D4F-4A87-BCF6-CFFA879EFB80',
        },
      ],
    },
  ],
};

module.exports = [
  {
    method: 'POST',
    path: `/${apiVersion}/token`,
    options: {
      tags: ['api'],
      description: 'Create a MyModel',
      validate: {
        failAction: failAction('request'),
      },
      response: {
        status: { 200: Joi.any() },
        failAction: failAction('response'),
      },
      auth: false,
    },

    handler: async (request, h) => {
      const { payload } = request;
      console.log({ payload });
      const state = dig(payload, 'data', 'context', 'protocol', 'request', 'state');
      const email = dig(payload, 'data', 'context', 'user', 'profile', 'login');

      request.log('info', '**********************');
      request.log('info', JSON.stringify({ email, state }));
      request.log('info', '===============================');

      if (state !== 'site/F0384685-F87D-474B-848D-2058AC5655A7/CRC') {
        return {};
      }

      const response = email === 'david.villarama@science37.com' ? davidResponse : normalResponse;

      request.log('info', JSON.stringify(response));

      return response;
    },
  },
];
