import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
