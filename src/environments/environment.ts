import authpackage from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain: authpackage.domain,
    clientId: authpackage.clientId,
    redirectUri: window.location.origin,
  },
};
