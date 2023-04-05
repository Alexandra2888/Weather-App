import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-favorite-city',
  templateUrl: './favorite-city.component.html',
  styleUrls: ['./favorite-city.component.scss'],
})
export class FavoriteCityComponent implements OnInit {
  favorites: string[] = [];

  constructor(private favorite: FavoriteService) {}

  ngOnInit(): void {
    this.favorites = this.favorite.getFavorites();
  }
  
  removeFromFavorites(city: string) {
    this.favorite.removeFavorite(city);
    this.favorites = this.favorite.getFavorites();
  }
}
