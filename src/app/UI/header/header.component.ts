import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkTheme = false;

  constructor() {}

  ngOnInit(): void { }
   toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'theme-dark' : 'theme-light';
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(theme);
  }
}
