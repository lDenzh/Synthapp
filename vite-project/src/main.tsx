import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DragDropFiles from './App1'
import GTinput from './GTinput'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style ={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }}>
      <DragDropFiles />
      <GTinput />
    </div>
  </React.StrictMode>,
)
