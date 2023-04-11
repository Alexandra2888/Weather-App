import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  city = 'Bucharest';
  weatherData: any;
  today = Date.now();
  currentBgImage: any;
  day: any;
  weather: any = [];
  dates: Date[] = [];

  constructor(
    private weatherService: WeatherService,
    private favorite: FavoriteService
  ) {
     for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      this.dates.push(date);
    }
  
  }

  ngOnInit(): void {
    this.getWeather();
    this.get7DaysWeather();

    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 18) {
      this.currentBgImage = './assets/white_cloud.png';
    } else {
      this.currentBgImage = './assets/starry_nigh.png';
    }
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data: any) => {
      this.weatherData = data;
    });
  }

  getMainTemp() {
    return Math.round(this.weatherData.main.temp);
  }

  getTempFeels() {
    return Math.round(this.weatherData.main.feels_like);
  }

  getMinTemp() {
    return Math.round(this.weatherData.main.temp_min);
  }

  getMaxTemp() {
    return Math.round(this.weatherData.main.temp_max);
  }

  addToFavorites() {
    this.favorite.addFavorite(this.weatherData.name);
  }

  get7DaysWeather() {
    this.weatherService.get7Days(this.city).subscribe((data: any) => {
      this.weather = data.list;
      console.log(data.list);
    });
  }

  resultFound() {
    return this.weather && this.weather.length > 0;
  }
}
