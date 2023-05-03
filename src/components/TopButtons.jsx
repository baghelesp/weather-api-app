import React from "react";

function TopButtons({setQuery}) {
    const cities=[
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Sydney'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Paris'
        }
    ]
  return <div className="flex items-center justify-around my-6">
        {cities.map((city)=>(
            <button key={city.id} 
                class="font-extrabold mx-1 text-transparent text-lg bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 transition ease-out hover:scale-125"
                onClick={()=>  setQuery({q:city.title})}
            >
                {city.title}
            </button>
        ))}
  </div>
}

export default TopButtons;
