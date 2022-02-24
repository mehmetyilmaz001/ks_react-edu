import { makeUserManager } from 'react-oidc';
// import { UserManagerSettings } from 'oidc-client';

const localUrl = 'http://localhost:3000';

const userManagerConfig = {
  //client_id: 'diskaynak.local.code',
  client_id: 'lms',
  response_type: 'code',
  scope: 'offline_access api.read openid profile',
  authority: 'https://kskimlik.kocsistem.com.tr',
  //authority: 'http://localhost:5005',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true,
  post_logout_redirect_uri: `${localUrl}/signout-callback-oidc`,
  client_secret: "secret",
  redirect_uri: `${localUrl}/signin-oidc.html`,
  silent_redirect_uri: `${localUrl}/silent-renew.html`,
};

const userManager = makeUserManager(userManagerConfig);

export default userManager;