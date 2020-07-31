import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public language: string;

  constructor(public translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.onDefaultLangChange.subscribe((res) => {
      if (res && res.lang) {
        this.language = res.lang;
      }
    });
    this.translateService.onLangChange.subscribe((res) => {
      if (res && res.lang) {
        this.language = res.lang;
      }
    });
  }

}
