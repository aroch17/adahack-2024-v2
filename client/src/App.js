import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // const [message, setMessage] = useState('');
  // useEffect(() =>
  //   async function getData() {
  //     const res = await fetch('http://localhost:3001/place', {
  //       method: 'GET',
  //       headers: {
  //         'mode': 'no-cors',
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Methods': 'GET, POST,PATCH,OPTIONS'
  //       }
  //     })
  //     const data = await res.json()
  //     console.log(data)
  //     setMessage(data)
  //   }, []);

  const [showRestaurant, setShowRestaurant] = useState(false);
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" }
  });

  async function getPlace() {
    const res = await fetch('http://localhost:3001/place', {
      method: 'POST',
      headers: {
        'mode': 'no-cors',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST,PATCH,OPTIONS'
      },
      body: {
        lat: location.coordinates.lat,
        long: location.coordinates.lng
      }
    })
    const data = await res.json()
    console.log(data)
    setLocation(data)
  }

  const onSuccess = async location => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
    getPlace()
  };

  const onError = error => {
    setLocation({
      loaded: true,
      error,
    });
  };

  async function handleClick() {
    setShowRestaurant(!showRestaurant);

    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: ":(((",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <div className="text-black font-semibold py-20 text-center">
        <h1 className="text-6xl">RESTAURANT FINDER</h1>
        <h2 className="text-2xl mt-10">Scan the QR code and fill in the form. When you're done, click on 'GO' and we'll find the perfect restaurant for you.</h2>
      </div>
      <div className="max-w-80">
        <img src={require('./RestaurantFormQR.png')} alt="" />
        <button onClick={handleClick} className="w-full mt-10 text-white font-semibold rounded-lg bg-green-400 px-4 py-2">GO</button>
      </div>

      {showRestaurant &&
        <div className="text-black font-semibold py-10 text-center">
          <h2 className="text-2xl">Based on the responses in the form, we recommend....</h2>
          {location.loaded ? (location.error ?
            (<div>Error: {location.error.message}</div>) :
            (<div>Latitude {location.coordinates.lat}, Longitude {location.coordinates.lng}</div>)) :
            (<div>Fetching location...</div>)
          }
        </div>
      }
    </main>
  );
}

export default App;
