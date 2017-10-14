import { Component, OnInit } from '@angular/core';
import { TranslateService } from './lang';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  reloading = false;
  public title = 'app';
  public supportedLanguages: any[];
  public field: string;
  
  constructor(private _translate: TranslateService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
        { display: 'English', value: 'en' },
        { display: 'Español', value: 'es' },
        { display: 'Български', value: 'bg' },
        ];

        // set current langage
     this.selectLang('bg');
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    this._translate.use(lang);
    this.reloading = true;
            this.cd.detectChanges();
            this.reloading = false;
            this.cd.detectChanges();
            this.cd.markForCheck();
  }
}
