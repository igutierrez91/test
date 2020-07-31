import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

enum USER_STATES {
  ERROR = 500,
  OK = 200,
  REGISTER = 200,
  PENDING_DATA = 300,
}

enum OPERATIVES {
  UPDATE = 'update',
  REGISTER = 'register',
  ERROR = 'error'
}

@Injectable({
  providedIn: 'root'
})
export class EnroutingService {


  constructor(private route: Router) { }

  doActionInFunctionOfUserState(USER_STATE) {
    switch (USER_STATE) {
      case USER_STATES.OK:
        this.route.navigate(['login']);
        break;
      case USER_STATES.REGISTER:
        this.route.navigate(['register']);
        break;
      case USER_STATES.PENDING_DATA:
        this.route.navigate(['update']);
        break;
      case USER_STATES.ERROR:
        this.route.navigate(['error']);
        break;
      default:
        break;
    }
  }

  finishOperative(operative: string) {
    switch (operative) {
      case OPERATIVES.UPDATE:
        this.route.navigate(['update-success']);
        break;
      case OPERATIVES.REGISTER:
        this.route.navigate(['register-success']);
        break;
      case OPERATIVES.ERROR:
        this.route.navigate(['error-success']);
        break;
      default:
        this.route.navigate(['error']);
        break;
    }
  }

}
