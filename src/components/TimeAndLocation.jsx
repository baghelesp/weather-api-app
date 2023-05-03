import React from "react";
import { formatToLocalTime } from "../services/WeatherServices";

function TimeAndLocation({weather:{dt,name,country,timezone}}) {
   var date = new Date(dt * 1000);
    //var timestr = date.toLocaleTimeString();
   console.log(new Date(dt*1000-(timezone*1000)).toLocaleDateString());
   console.log(new Date(dt*1000).toLocaleTimeString());  

    return <div>
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
                {formatToLocalTime(dt)}
            </p>
        </div>
    
        <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
        </div>
    </div>;
}

export default TimeAndLocation;
