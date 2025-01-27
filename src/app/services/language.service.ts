import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  translate: TranslateService = inject(TranslateService);

  private currentLang = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLang.asObservable();

  constructor() {
    let l = localStorage.getItem('lang');
    if (l != null) this.changeLang(l);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.currentLang.next(lang);
    localStorage.setItem('lang', lang);
  }
}
