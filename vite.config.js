import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/suman4132/mernportfolio.git', // Replace with your repo name (must match GitHub Pages URL)
});