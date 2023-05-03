import React from "react";
import { UilSun,UilTemperature,UilWind,UilTear, UilSunset  } from '@iconscout/react-unicons'

function Forecast( {title}) {
  return <div>
    <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
    </div>
    <hr className="my-2"/>
    <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm"> 04:00 PM</p>
            <UilSun size={35} className="text-red-600"/>
            <p className="font-medium">20&deg;</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm"> 05:00 PM</p>
            <UilSun size={35} className="text-orange-500"/>
            <p className="font-medium">22&deg;</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm"> 06:00 PM</p>
            <UilSun size={35} className="text-orange-500"/>
            <p className="font-medium">27&deg;</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm"> 07:00 PM</p>
            <UilSun size={35} className="text-orange-500"/>
            <p className="font-medium">23&deg;</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm"> 04:30 PM</p>
            <UilSun size={35} className="text-red-500"/>
            <p className="font-medium">22<span>&deg;</span></p>
        </div>
    </div>
  </div>;
}

export default Forecast;
