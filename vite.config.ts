import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import unocss from '@unocss/vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueDevtools from 'vite-plugin-vue-devtools';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next';

export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/styles/scss/global.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    VueDevtools(),
    unocss(),
    Components({
      resolvers: [BootstrapVueNextResolver()]
    })
  ],
  server: {
    port: 8898
  }
});
