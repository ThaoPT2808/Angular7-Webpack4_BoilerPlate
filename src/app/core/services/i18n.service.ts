import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { EventEnum } from '../enums/event.enum';
import { SupportedLanguages } from '../models/i18n.model';

import { LocalStorageService } from './local-storage.service';
import { EventManagerService } from './event-manager.service';

@Injectable({
    providedIn: 'root'
})
export class I18nService {
    currentLanguage: string;

    constructor(
        private translateService: TranslateService,
        private localStorageService: LocalStorageService,
        private eventManagerService: EventManagerService
    ) { }

    setLanguage(language: string): Observable<any> {
        this.currentLanguage = language;
        this.localStorageService.set('language', language);
        return this.translateService.use(language);
    }

    getLanguage(): string {
        return this.currentLanguage;
    }

    init() {
        this.currentLanguage = this.localStorageService.get('language');
        if (!this.currentLanguage) {
            this.translateService.addLangs(SupportedLanguages.map(lan => lan.code));
            const browserLang = this.translateService.getBrowserLang();

            this.currentLanguage = browserLang.match(/en/) ? browserLang : SupportedLanguages[0].code;
        }

        // debugger
        this.setLanguage(this.currentLanguage);

        this.translateService.onLangChange.subscribe((event: any) => {

            /**
             * We use eventManager to publish again to synchronize publish/subcribe mechanism of eventManager in all application
             */
            this.eventManagerService.broadcast({
                name: EventEnum.CORE_CHANGE_LANGLUE,
                data: {
                    language: event && event.lang
                }
            });
        });
    }

    getText(key: string) {
        return this.translateService.instant(key);
    }
}
