import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DragDropFiles from './App1'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DragDropFiles />
  </React.StrictMode>,
)
