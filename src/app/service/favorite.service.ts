import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favorites: string[] = [];

  constructor() {
       this.loadFavorites();
  }

  
  addFavorite(city: string) {
    this.favorites.push(city);
    this.saveFavorites();
  }

  removeFavorite(city: string) {
    const index = this.favorites.indexOf(city);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
    }
  }

  getFavorites() {
    return this.favorites;
  }

  private loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  private saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
