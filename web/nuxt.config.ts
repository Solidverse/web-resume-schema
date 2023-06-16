// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@vuepic/vue-datepicker/dist/main.css',
    '@vueup/vue-quill/dist/vue-quill.snow.css',
    'md-editor-v3/lib/style.css',
    '@/assets/style/main.scss',
    '@/assets/style/vue-date-picker.scss',
  ],
  modules: [
    '@vue-macros/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  ssr: false,
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
});
