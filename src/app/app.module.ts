import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FavoriteCityComponent } from './components/favorite-city/favorite-city.component';
import { WeatherService } from './service/weather.service';
import { FavoriteService } from './service/favorite.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FavoriteCityComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [WeatherService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
