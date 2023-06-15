import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import ' /index.css'
import ".../../styles/global.css"
import { MovieContextProvider } from './context/MovieContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <MovieContextProvider>
    <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
     </AuthContextProvider>
  </MovieContextProvider> 
  </ThemeContextProvider>
)
