import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoriteCityComponent } from './components/favorite-city/favorite-city.component';
const routes: Routes = [
{
path: '', component:HomeComponent
  },
  {
    path: 'favorite', component:FavoriteCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
