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

  private availableLanguagesSubject = new BehaviorSubject<string[]>(['es', 'fr']);
  availableLanguages$ = this.availableLanguagesSubject.asObservable();

  constructor() { }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.currentLang.next(lang);
  }
}
