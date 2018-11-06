export const providerConfigs = {
  '000000000': {
    name: 'Slack',
    icon: 'https://s3.eu-central-1.amazonaws.com/cluedintest/slack.png',
    authMethods: {
      oauth: {
        oauthCallbackKey: 'slack',
        initial: 'api/slack?authError=none',
        callback: 'api/slack?authError',
      },
    },
    domain: 'slack.com',
    properties: [{
      displayName: 'Channels to include',
      type: 'list',
      isRequired: true,
      name: 'channels',
      options: {
        key: 'Id',
        displayName: 'Name',
      },
    }],
  },
  111111111: {
    name: 'Zendesk',
    icon: 'https://s3.eu-central-1.amazonaws.com/cluedintest/zendesk.png',
    properties: [],
    authMethods: {
      credentials: [
        {
          type: 'subdomain',
          name: 'websiteName',
          displayName: 'Website Name',
          protocol: 'https://',
          domain: 'zendesk.com',
          isRequired: true,
        },
        {
          type: 'input',
          name: 'username',
          displayName: 'Username',
          isRequired: true,
        },
        {
          type: 'password',
          name: 'password',
          displayName: 'Password',
          isRequired: true,
        },
      ],
    },
  },
};

export const providers = [
  {
    Name: 'Slack',
    Id: '000000000',
    Details: 'Slack is a message based application',
  },
  {
    Name: 'Zendesk',
    Id: '111111111',
    Details: 'Zendesk does somethings',
  },
];
