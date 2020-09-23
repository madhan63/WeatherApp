import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
lan:any;
log:any;
weather:any;
  constructor(private WeatherService:WeatherService) { }

  ngOnInit(): void {
    //this.weatherService.getweatherbycoord(35,139).subscribe(console.log);
    this.getlocation();
  }
getlocation()
{
  if("geolocation" in navigator)
  {
    navigator.geolocation.watchPosition((success)=>{
      this.lan=success.coords.latitude;
      this.log=success.coords.longitude;
      this.WeatherService.getweatherbycoord(this.lan,this.log).subscribe(data=>{
        this.weather=data;
      });
    })
  }
}
}
