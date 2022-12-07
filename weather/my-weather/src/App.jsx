// import logo from './logo.svg'; 
import { useState } from 'react';
import './App.css';
import axios from 'axios';

let baseUrl = ``;
if(window.location.href.split(":")[0] === "http"){
  baseUrl = `http://localhost:5001`
}


function App() {
  const cityHandler = (e) => {
    e.preventDefault();

    axios.get(`${baseUrl}/weather/${cityName}`) 
      .then(response => {
        console.log(response.data);
        setCityWeather(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  const [cityName, setCityName] = useState("");
  const [cityWeather, setCityWeather] = useState(null);




  return (
    <body>
      <div className="main-box">
        <div className="top-main">
          <div className="head">
            <h2>Weather forecast</h2>
          </div>
          <div className="search">
            <form onSubmit={cityHandler}>
              <input type="text" placeholder='Tell The City...' required onChange={(e) => {
                setCityName(e.target.value)
              }} />
              <button>Search</button>
            </form>
          </div>
          {cityWeather === null ?
           <div className="weather-box">
          </div> : null}
          {cityWeather === null ? null : (
            <div className="weather-box">
              <h1>{cityWeather?.cityName}</h1>
              <h2>Weather: {cityWeather?.temp}</h2>
              <h3>Wind: {cityWeather?.wind}</h3>
              <p>Humidity: {cityWeather?.humidity}</p>
            </div>
          )}
        </div>
        <div className="bottom"></div>
      </div>
    </body>
  );
}


export default App;
