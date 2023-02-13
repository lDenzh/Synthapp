import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import axios from 'axios';

async function getAPImessage() { 
  try {
    const response = await axios.get('http://localhost:8000/data');
    console.log(response);
  }
  catch (error) {
    console.log(error)
  }
}

async function makePostRequest() {

  let params = {
      id: 6,
      first_name: 'Fred',
      last_name: 'Blair',
      email: 'freddyb34@gmail.com'
    }

  let res = await axios.post('http://localhost:8000/users/request', params);

  console.log(res.data);
  console.log("I was here")
}


function App() {
  const [count, setCount] = useState(0)
  getAPImessage();
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => makePostRequest()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Testing the app, very fast
      </p>
    </div>
  )
}

export default App
