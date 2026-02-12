import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom' // <- Bunu ekle
import './index.css'
import App from './App.tsx'
import './styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />  {/* Artık App ve Navbar Router context'ine sahip */}
    </Router>
  </StrictMode>,
)
