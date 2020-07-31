import { Component, OnInit } from '@angular/core';
import { Options } from '../../models/options';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public languages: Options [] = [
    {
      label: 'CA',
      value: 'ca'
    },
    {
      label: 'ES',
      value: 'es'
    }
  ];

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage($event) {
    this.translateService.use($event);
  }

}
