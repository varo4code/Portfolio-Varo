import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.sass'
})
export class MainBannerComponent {
  bannerImage: string = 'assets/profile-banner-dark.png';

  constructor(private themeService: ThemeService) {
    this.bannerImage = 'assets/profile-banner-'+ themeService.currentTheme +'.png';
  }

  ngOnInit() {
    this.themeService.bannerImage$.subscribe(imagePath => {
      this.bannerImage = imagePath;
    });
  }

}
