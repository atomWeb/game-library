import authpackage from '../../auth_config.json';

export const environment = {
  production: true,
  auth: {
    domain: authpackage.domain,
    clientId: authpackage.clientId,
    redirectUri: window.location.origin,
  },
};
