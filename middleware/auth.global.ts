// middleware/auth.global.ts
import {useAuth} from 'vue-clerk';

export default defineNuxtRouteMiddleware((to) => {
  // isSignedIn here can be used in both SSR and CSR
  // since we set an initial state in the plugin!
  const {isSignedIn} = useAuth();

  const protectedPages = ['index', 'profile-id', 'settings'
  ];
  const publicPages = ['sign-in', 'sign-up'];

  if (isSignedIn.value && publicPages.includes(to.name as string))
    return navigateTo('/');

  if (!isSignedIn.value && protectedPages.includes(to.name as string))
    return navigateTo('sign-in');
});