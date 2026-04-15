import { useState } from 'react';
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"


export default function WeatherApp(){
    const [weatherInfo , setWetherInfo] = useState({
         city : "Chandrapur",
        feelsLike: 24.02,
        humidity:38,
        temp : 28.20,
        tempMax: 26.34,
        tempMin: 24.52,
        weather: "clear sky"
    })
    let updateinnfo = (newinfo) =>{
        setWetherInfo(newinfo)
    }
    return(
        <div style={{textAlign : "center"}}>
            <h2>
                Weather App by lbs.codes
            </h2>
             <SearchBox updateinnfo={updateinnfo}/>
             <InfoBox info={weatherInfo}/>
        </div>
    )
}