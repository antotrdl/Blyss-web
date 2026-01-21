import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement (système ou .env)
  // Fix: Property 'cwd' does not exist on type 'Process' - use '.' instead
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    // Remplace process.env.API_KEY par sa valeur lors du build pour le client
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    server: {
      host: true
    },
    preview: {
      host: true,
      port: 8080,
      allowedHosts: true
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false
    }
  };
});