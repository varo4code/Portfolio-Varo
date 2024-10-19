import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  logoPath: String = 'assets/logoVaroCodedark.png';
  toggleIco: String = 'assets/toggle-dark.png'
  isAnimActive = false;
  isDarkTheme = true

  constructor(private themeService: ThemeService) {
    this.logoPath = 'assets/logoVaroCode'+ this.themeService.currentTheme +'.svg'
    this.toggleIco = 'assets/toggle-'+ this.themeService.currentTheme +'.png'
    this.isDarkTheme = this.themeService.getIsDarkTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.logoPath = 'assets/logoVaroCode'+ this.themeService.currentTheme +'.svg'
    this.toggleIco = 'assets/toggle-'+ this.themeService.currentTheme +'.png'
    this.isDarkTheme = this.themeService.getIsDarkTheme();

    this.isAnimActive = true;
    setTimeout( () => {
      this.isAnimActive = false;
    }, 500)
  }

}
