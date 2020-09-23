import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url="https://api.openweathermap.org/data/2.5/weather";
apikey="592a4e70989368264ba4827e96c9219a";
  constructor(private http:HttpClient) { }
getweatherbycoord(lan,log)
{
  let params=new HttpParams()
  .set("lan",lan)
  .set("log",log)
  .set("units","imperial")  
  .set("appid",this.apikey); 
  return this.http.get(this.url,{ params });
}
}
  