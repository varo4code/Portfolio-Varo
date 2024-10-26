import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDarkTheme = true;

  private bannerImage = new BehaviorSubject<string>('assets/profile-banner-dark.webp');
  bannerImage$ = this.bannerImage.asObservable();

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
    const imagePath = this.isDarkTheme ? 'assets/profile-banner-dark.webp' : 'assets/profile-banner-light.webp';
    this.bannerImage.next(imagePath);
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
