export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/supercalifragilistic-run/',
    middleware: ['auth']
  },

  publicRuntimeConfig: {
    axios: {
      baseUrl: process.env.rest_api_stage
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'supercalifragilistic-run',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{
      rel: 'icon',
      type: 'image/svg+xml',
      href: `data:image/svg+xml,
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle fill="whitesmoke" cx="50" cy="50" r="55"/> 
                  <text y="0.9em" font-size="90">🦩</text>
              </svg>`
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-leaflet'
  ],

  // fallback value, proper should be read from config file, see publicRuntimeConfig
  axios: {
    baseURL: process.env.rest_api_stage
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    jit: true
  },

  auth: {
    strategies: {
      awsCognito: {
        scheme: 'oauth2',
        endpoints: {
          authorization: process.env.user_pool_domain + '/login',
          token: process.env.user_pool_domain + '/token',
          userinfo: process.env.user_pool_domain + '/userInfo',
          logout: process.env.user_pool_domain + '/logout'
        },
        responseType: 'code',
        grantType: 'authorization_code',
        redirectUri: process.env.app_auth_callback_url_root + '/supercalifragilistic-run/profile',
        logoutRedirectUri: process.env.app_auth_callback_url_root + '/supercalifragilistic-run/profile/profile?action=logout',
        clientId: process.env.user_pool_client_id,
        clientSecret: process.env.user_pool_client_secret,
        scope: ['email', 'openid', 'profile'],
        codeChallengeMethod: 'S256'
      }
    }
  }
}
