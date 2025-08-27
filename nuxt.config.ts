// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: {
    enabled: process.env.NODE_ENV !== 'production',
  },
  nitro: {
    preset: 'aws-lambda',
  },
  experimental: {
    appManifest: false,
  },
  components: {
    dirs: [{ path: "~/components", global: false }],
  },
})
