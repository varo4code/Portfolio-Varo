import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDarkTheme = true;

  private bannerImage = new BehaviorSubject<string>('assets/profile-banner-dark.webp');
  bannerImage$ = this.bannerImage.asObservable();

  private icoGithub = new BehaviorSubject<string>('assets/icons/github-dark.png');
  icoGithub$ = this.icoGithub.asObservable();

  private icoLinkedin = new BehaviorSubject<string>('assets/icons/linkedin-dark.png');
  icoLinkedin$ = this.icoLinkedin.asObservable();

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
      this.icoGithub.next('assets/icons/github-dark.png');
      this.icoLinkedin.next('assets/icons/linkedin-dark.png');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      this.icoGithub.next('assets/icons/github-light.png');
      this.icoLinkedin.next('assets/icons/linkedin-light.png');
    }
  }

  get currentTheme() {
    return this.isDarkTheme ? 'dark' : 'light';
  }

  getIsDarkTheme(): boolean {
    return this.isDarkTheme;
  }
  
}
