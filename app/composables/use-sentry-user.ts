import { setUser } from '@sentry/nuxt';

export default function useSentryUser() : void {
  setUser(null);
}
