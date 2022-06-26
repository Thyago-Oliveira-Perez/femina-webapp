import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './pages/Home/index.page'
import { Header } from './components/Global/Header';
import { Cliente } from './pages/Cliente';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
      <Cliente/>
  </React.StrictMode>
)
