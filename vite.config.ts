import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement (système ou .env)
  // Fix: Property 'cwd' does not exist on type 'Process' - use '.' instead
  const env = loadEnv(mode, '.', '');

  return {
    appType: 'spa',
    plugins: [react(), tailwindcss()],
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
      sourcemap: false,
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-icons': ['lucide-react']
          }
        }
      }
    }
  };
});