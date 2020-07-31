import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { Options } from '../../models/options';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit {

  @Output() valueChange = new EventEmitter<string>();
  @Input() options: Options;
  @Input() defaultValue: string;

  constructor() { }

  ngOnInit() {

  }

  change($event) {
    console.log($event.value);
    this.valueChange.emit($event.value);
  }

}
