import { Component, OnInit } from '@angular/core';
import { EnroutingService } from '../../core/enrouting.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private enroutingService: EnroutingService) { }

  ngOnInit() {
  }

  continue(): void {
    this.enroutingService.finishOperative('error');
  }

}
