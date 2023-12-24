import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Location} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

     language = 'fr';

    constructor(
        public translateService: TranslateService,
        private location: Location,
    ) {
    }

    initLanguage(): void {
        this.translateService.addLangs(['fr', 'en']);
        let language = navigator.language || (navigator as any).userLanguage;
        language = 'fr';
        this.translateService.setDefaultLang(language);

        // Change the URL without navigate:
        this.location.go(language);

        this.language = language;
    }

    changeLanguage(language: string): void {
        this.translateService.setDefaultLang(language);
        this.location.go(language);
        this.language = language;
    }
}
