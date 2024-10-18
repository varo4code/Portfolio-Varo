import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDarkTheme = true;

  constructor() {
    let t = localStorage.getItem('isDarkTheme');
    if (t != null) this.isDarkTheme = (t == '1') ? true : false;
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('isDarkTheme', this.isDarkTheme ? '1' : '2');
    this.applyTheme();
  }

  private applyTheme() {
    console.log('cambio de tema');
    
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  get currentTheme() {
    return this.isDarkTheme ? 'dark' : 'light';
  }

  getIsDarkTheme(): boolean {
    return this.isDarkTheme;
  }
  
}
