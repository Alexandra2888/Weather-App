import {
  Component,
  OnInit,

} from '@angular/core';
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


  constructor(
    private weatherService: WeatherService,
    private favorite: FavoriteService
  ) {}

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

  addToFavorites() {
    this.favorite.addFavorite(this.weatherData.name);
  }
}
