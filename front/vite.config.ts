import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),    }
  },
  assetsInclude: ['**/*.xlsx'], // Añade esto para que Vite maneje archivos .xlsx
  server: {
    port: 3000, // Cambia el puerto a 3000
    //sourcemap: false,  // Desactiva los source maps en desarrollo
  },
  build: {
    sourcemap: false, // Desactiva los source maps en producción
    outDir: 'dist', // Configura el directorio de salida
    rollupOptions: {
      output: {
        sourcemap: false, // También intenta desactivar aquí
      },
    },
  },
})
