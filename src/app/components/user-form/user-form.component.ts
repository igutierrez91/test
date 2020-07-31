import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: FormGroup;
  @Input() disableFields: string [] = [];
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('Israel', [Validators.required]),
      surname: new FormControl('Gutierrez', [Validators.required]),
      surname2: new FormControl('Gascón', [Validators.required]),
      address: new FormControl('Dirección 1', [Validators.required]),
      numPol: new FormControl('123456789', [Validators.required]),
      email: new FormControl( 'test@everis.com', [Validators.required, Validators.email]),
      phone: new FormControl('7323363', [Validators.required]),
      readme: new FormControl(false, [Validators.requiredTrue])
    });
    // this.setDisabledFields();
  }

  setDisabledFields(): void {
    this.disableFields.map((df) => {
      this.user.controls[df].disable();
    });
  }

  submit(): void {
    const userForm = this.user.getRawValue();
    this.authenticationService.registerUser(userForm);
  }

}
