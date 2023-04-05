import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  city = 'Bucharest';
  country = '';
  weather: any;
  weatherData: any;
  temperatureChart: any;
  humidityChart: any;
  today: number = Date.now();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
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

  onAddToFavorites() {
    const favorite = {
      city: this.weather.city.name,
      country: this.weather.city.country,
    };
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (
      !favorites.some(
        (item: any) =>
          item.city === favorite.city && item.country === favorite.country
      )
    ) {
      favorites.push(favorite);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${favorite.city} added to favorites`);
    } else {
      alert(`${favorite.city} already exists in favorites`);
    }
  }
}
