// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: [
    '~/assets/css/main.scss'
  ],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  runtimeConfig: {
    public: {
      publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
      signInUrl: process.env.CLERK_SIGN_IN_URL,
      signUpUrl: process.env.CLERK_SIGN_UP_URL,
      signInForceRedirectUrl: process.env.CLERK_SIGN_IN_FORCE_REDIRECT_URL,
      signUpForceRedirectUrl: process.env.CLERK_SIGN_UP_FORCE_REDIRECT_URL,
    }
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', {injectPosition: "first"}],
    configPath: 'tailwind.config.js',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  image: {
    domains: ["pexels.com"]
  }
});