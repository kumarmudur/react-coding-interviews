import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import DisplayModeProvider from './components/task10/DisplayModeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DisplayModeProvider>
      <App />
    </DisplayModeProvider>
  </React.StrictMode>,
)
