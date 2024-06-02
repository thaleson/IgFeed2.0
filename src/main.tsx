import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe ReactDOM diretamente de 'react-dom'

import { App } from './App';

// Renderiza o componente principal da aplicação dentro de um root do React
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Utiliza o modo rigoroso do React para destacar potenciais problemas na aplicação
  <React.StrictMode>
    {/* Renderiza o componente App */}
    <App />
  </React.StrictMode>
);
