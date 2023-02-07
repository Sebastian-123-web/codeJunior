import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './AppSebastianGerardo';
import Perfildeveloper from './pages/Developers/Perfil/Perfil'
import DevForm from './pages/Registros/regdev/DevForm'
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Home />
    {/* <App2 /> */}
  </React.StrictMode>
);