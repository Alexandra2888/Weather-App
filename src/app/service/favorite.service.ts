import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favorites: string[] = [];

  constructor(private toastr: ToastrService) {
    this.loadFavorites();
  }
  addFavorite(city: string) {
    if (this.favorites.includes(city)) {
      this.toastr.warning('City is already at favorites!');
      return;
    }

    try {
      this.favorites.push(city);
      this.saveFavorites();
      this.toastr.success('City added to favorites!');
    } catch (error) {
      this.toastr.error('Something went wrong!');
    }
  }

  removeFavorite(city: string) {
    const index = this.favorites.indexOf(city);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
      this.toastr.success('City removed from favorites!');
    } else {
      this.toastr.error('Something went wrong!');
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
