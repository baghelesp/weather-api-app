
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Inputs from './components/Inputs';
import TopButtons from './components/TopButtons';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherServices';
import {useEffect, useState} from "react";
import { queryAllByAltText } from '@testing-library/react';
// import image from './components/sun.png'


function App() {
  const[query, setQuery]= useState({q : "london"});
  const[units, setUnits]=useState('metric');
  const[weather, setWeather]=useState(null);

  useEffect(()=>{
    const fetchWeather=async ()=>{
      await getFormattedWeatherData({...query,units,}).then(
        (data)=>{
          setWeather(data);
          console.log(data);
        }
      );
      
    }
    fetchWeather();
  },[query, units])

  const formatBackground=()=>{
    if(!weather) return "from-cyan-700 to-blue-700";
    const threshold =units ==="metric" ? 20 : 60;
    if(weather.temp<=threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  }
  
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-1 sm:px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
          <TopButtons setQuery={setQuery}/>
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
          {weather &&(
            <div>
              <TimeAndLocation weather={weather}/>
              <TemperatureAndDetails  weather={weather}/>
              <Forecast title="hourly forecast"/>
              <Forecast title="daily forecast"/>
            </div>
          )}

          
          
    </div>
  );
}

export default App;
