import vue from '@vitejs/plugin-vue';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          img: [],
        },
      },
    }),
    ssr(),
  ],
};

export default config;
