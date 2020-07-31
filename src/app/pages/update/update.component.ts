import { Component, OnInit } from '@angular/core';
import { EnroutingService } from '../../core/enrouting.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private enroutingService: EnroutingService) { }

  ngOnInit() {
  }

  continue(): void {
    this.enroutingService.finishOperative('update');
  }

}
