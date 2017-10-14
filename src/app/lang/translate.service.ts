import {Injectable, Inject} from '@angular/core';
import { TRANSLATIONS } from './translations'; // import our opaque token

@Injectable()
export class TranslateService {
    private _currentLang: string;

    public get currentLang() {
        return this._currentLang;
    }

    // inject our translations
    constructor(@Inject(TRANSLATIONS) private _translations: any) {
    }

    public use(lang: string): void {
        // set current language
        this._currentLang = lang;
    }

    private translate(key: string, args: any[]): string {
        // private perform translation
        // let translation = key;
        console.log('args:' + args);
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            let s = this._translations[this.currentLang][key];
            console.log(s);
            return s;
        }

        return key;
    }

    public instant(key: string, args: any[]) {
        // call translation
        return this.translate(key, args); 
    }
}
