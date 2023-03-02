import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import axios, { isAxiosError } from 'axios';

async function getAPImessage() { 
  try {
    const response = await axios.get('http://localhost:8000/data');
    console.log(response);
  }
  catch (error) {
    console.log(error)
  }
}
async function get1APImessage() { 
  try {
    const response = await axios.get('http://localhost:8000/test');
    console.log(response);
  }
  catch (error) {
    console.log(error)
  }
}
type CreateUserResponse = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}
async function makePostRequest() {
  try {
    const{ data, status } = await axios.post<CreateUserResponse>(
      'http://localhost:8000/posty',
      { id: '6', first_name: 'John', last_name: 'Smith', email: 'johnsmith@yahoo.com'},
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));
    console.log(status);
    return data;

  } catch (error){
    if (axios.isAxiosError(error)){
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occured';
    }
  }
}


function App() {
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
          post "/posty"
        </button>
        <button onClick={() => getAPImessage()}>
          get "/data" 
        </button>
        <button onClick={() => get1APImessage()}>
          get "/" 
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
