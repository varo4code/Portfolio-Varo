import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '@services/language.service';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.sass'
})
export class MainBannerComponent {
  bannerImage: string = '';
  currentLang: string = '';
  icoGithub:string = '';
  icoLinkedin:string = '';

  constructor(private themeService: ThemeService, private langService: LanguageService) {
  }

  ngOnInit() {
    this.themeService.bannerImage$.subscribe(imagePath => {
      this.bannerImage = imagePath;
    });
    this.langService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
    this.themeService.icoGithub$.subscribe(ico => {
      this.icoGithub = ico
    })
    this.themeService.icoLinkedin$.subscribe(ico => {
      this.icoLinkedin = ico
    })
  }

  getCVurl() {
    if (this.currentLang == 'es') {
      return 'assets/docs/AlvaroRamirezCV_EN.pdf';
    }
    return 'assets/docs/AlvaroRamirezCV_'+ this.currentLang.toUpperCase()  +'.pdf';
  }

}
