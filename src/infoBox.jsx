
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { ClassNames } from '@emotion/react';
import "./infoBox.css"
import SevereColdIcon from '@mui/icons-material/SevereCold';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function Information({ info }){

  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";    
    return(
        <div className='infobox'>
        <div className='cardcontainer'>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {info.humidity >80 ? <ThunderstormIcon/> : info.temp > 15 ? <LocalFireDepartmentIcon/> :< SevereColdIcon/>}
        </Typography>
        <div>Temperature = {info.temp}</div>
        <div>Temperature-Min = {info.tempMin}&deg;C</div>
        <div>Temperature-max = {info.tempMax}&deg;C</div>
        <div>Humidity = {info.humidity}</div>
        
        
        <p>The weather can be describe as <i>{info.weather}</i> and feels like <i>{info.feelsLike}</i>&deg;C</p>
      </CardContent>
      
    </Card>
        </div>
        </div>
    )
}