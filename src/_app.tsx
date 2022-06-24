import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './pages/Home/index.page'
import { Header } from './components/Global/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
      <HomePage/>
  </React.StrictMode>
)
