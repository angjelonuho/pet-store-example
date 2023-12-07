import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from './reportWebVitals.js'
import { BrowserRouter } from 'react-router-dom'
import AppNavBar from "./components/AppNavBar"
import AppFooter from './components/AppFooter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppNavBar />
      <App />
      <AppFooter />
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals();