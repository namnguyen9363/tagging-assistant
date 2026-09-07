// Standard Auth0Provider setup, driven by 3 env vars (VITE_AUTH0_DOMAIN_ID,
// VITE_AUTH0_CLIENT_ID, VITE_AUTH0_REDIRECT_URI). No custom onRedirectCallback
// is needed: this app has no router (a single screen), so there's nothing to
// navigate back to — omitting it falls back to the Auth0 SDK's own default
// (window.history.replaceState to strip the auth query params), which is
// exactly what's needed here.
import { Auth0Provider as Auth0ProviderBase } from "@auth0/auth0-react";

export function Auth0Provider({ children }: { children: React.ReactNode }) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN_ID;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0ProviderBase
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      {children}
    </Auth0ProviderBase>
  );
}
