import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {


  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${'27e30316642436e9116eb88d2641f4d6'}`;
    return this.http.get(url);
  }

  getIconUrl(icon: string): string {
    return `https://openweathermap.org/img/w/${icon}.png`;
  }

  get7Days(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${'27e30316642436e9116eb88d2641f4d6'}&cnt=7`;
    return this.http.get(url);
  }
  
}
