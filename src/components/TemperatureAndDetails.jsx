import React from "react";
import { UilSun,UilTemperature,UilWind,UilTear, UilSunset,UilTemperatureMinus, UilTemperaturePlus  } from '@iconscout/react-unicons'
import {formatToLocalTime, iconUrlFromCode } from "../services/WeatherServices"
// <img src="../../public/sun.png" alt="not found!"></img>
function TemperatureAndDetails({weather:{details,icon, temp, temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) {
    return <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
        </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src={iconUrlFromCode(icon)}></img>
            <p className="text-4xl">{`${temp.toFixed()}`}<span>&#176;</span></p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1"/>
                    Real fell : <span className="font-medium ml-1">{`${feels_like.toFixed()}`}<span>&#176;</span></span>
                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1"/>
                    Humidity : <span className="font-medium ml-1">{`${humidity.toFixed()}`}%</span>
                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1"/>
                    Wind : <span className="font-medium ml-1">{`${speed.toFixed()}`}km/h</span>
                </div>
            </div>    
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
            <UilSun size={30} className="text-yellow-400"/>
            <p className="font-light">Rise :<span className="font-medium ml-1">{formatToLocalTime(sunrise,timezone,"hh:mm ")}</span></p>
            <p className="font-light">|</p>

            <UilSunset size={30} className="text-red-400"/>
            <p className="font-light">Set :<span className="font-medium ml-1">{formatToLocalTime(sunset,timezone,"hh:mm ")}</span></p>
            <p className="font-light">|</p>

            <UilTemperatureMinus size={25} className="mr-1 text-red-700" />
            <p className="font-light">Low :<span className="font-medium ml-1">{`${temp_min.toFixed()}`}<span>&#176;</span></span></p>
            <p className="font-light">|</p>

            <UilTemperaturePlus size={25} className="mr-1 text-cyan-300"/>
            <p className="font-light">High :<span className="font-medium ml-1">{`${temp_max.toFixed()}`}<span>&#176;</span></span></p>
        </div>
    </div>;
}

export default TemperatureAndDetails;
