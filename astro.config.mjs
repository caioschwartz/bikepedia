import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
const env = loadEnv('', process.cwd(), 'STORYBLOK');
const { STORYBLOK_DELIVERY_API_TOKEN } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  '',
);

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: STORYBLOK_DELIVERY_API_TOKEN,
      apiOptions: {
        region: 'eu',
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});