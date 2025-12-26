import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: "https://amplifycreativelab.github.io",
    base: "/demo-night-venue",
    vite: {
        plugins: [tailwindcss()]
    }
});
