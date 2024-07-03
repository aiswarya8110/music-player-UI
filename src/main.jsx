import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SongContextProvider } from './context/SongContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SongContextProvider>
    <App />
  </SongContextProvider>
)
