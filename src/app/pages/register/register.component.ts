import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { User } from '../../models/user';
import { EnroutingService } from '../../core/enrouting.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User;
  public checked = false;

  constructor(private userService: UserService, private enroutingService: EnroutingService) { }

  ngOnInit() {
    this.userService.getDataUser().subscribe((user) => {
      this.user = user.user;
    });
  }

  valueChange($event) {
    this.checked = $event.checked;
  }

  continue(): void {
    this.enroutingService.finishOperative('register');
  }

}
