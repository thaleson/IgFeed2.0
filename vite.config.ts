// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  // Outras configurações...
  resolve: {
    alias: {
      '@': '/src',
    },
  
  },
  // Especifique o novo nome do arquivo como ponto de entrada
  // main.tsx em vez de main.jsx

});
