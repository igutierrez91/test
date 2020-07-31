import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connecting',
  templateUrl: './connecting.component.html',
  styleUrls: ['./connecting.component.scss']
})
export class ConnectingComponent implements OnInit {

  public typeOperation = {
    register: false,
    update: false,
    error: false,
  };

  constructor( private router: Router) { }

  ngOnInit() {
    this.setTypeOperation(this.router.url);
  }

  private setTypeOperation(type: string) {
    if (type.includes('update')) {
      this.typeOperation.update = true;
    } else if (type.includes('register')) {
      this.typeOperation.register = true;
    } else {
      this.typeOperation.error = true;
    }
  }

}
