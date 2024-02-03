import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>
    async function getData() {
      const res = await fetch('http://localhost:3001/place', {
        method: 'GET',
        headers: {
          'mode': 'no-cors',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST,PATCH,OPTIONS'
        }
      })
      const data = await res.json()
      console.log(data)
      setMessage(data)
    }, []);

  return (
    <div className="App">
      {message.name}
    </div>
  );
}

export default App;
