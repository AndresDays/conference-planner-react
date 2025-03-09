import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Aquí envolvemos la aplicación con BrowserRouter */}
      <BrowserRouter basename="/conference-planner-react"> {/* Cambia esto por el nombre de tu app o subdirectorio */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
