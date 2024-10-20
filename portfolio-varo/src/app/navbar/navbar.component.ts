import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  @ViewChild('dropFlags', { static: false }) dropFlags!: ElementRef;
  langService: LanguageService = inject(LanguageService);

  currentLang: String = 'en';
  currentFlag: String = 'assets/flags/'+this.currentLang+'.png';
  logoPath: String = 'assets/logoVaroCodedark.png';
  toggleIco: String = 'assets/toggle-dark.png'
  isAnimActive = false;
  isDarkTheme = true

  constructor(private themeService: ThemeService) {
    this.logoPath = 'assets/logoVaroCode'+ this.themeService.currentTheme +'.svg'
    this.toggleIco = 'assets/toggle-'+ this.themeService.currentTheme +'.png'
    this.isDarkTheme = this.themeService.getIsDarkTheme();
  }

  ngOnInit(){
    this.langService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
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

  changeLang(lang: string) {
    this.langService.changeLang(lang);
    this.toggleFlags();
  }

  toggleFlags(){
    const dropFlags = this.dropFlags.nativeElement;

    if (!dropFlags.classList.contains("open")) {
      dropFlags.classList.add("open");
      return;
    }
    
    dropFlags.classList.remove("open");
    dropFlags.classList.add("closing");
    setTimeout( () => {
      dropFlags.classList.remove("closing");
    }, 250)
  }

}
