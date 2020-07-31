import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthorizationUserInfo } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  mockUser = {
    user: {
      name: 'Nombre',
      surname: 'Apellido',
      address: 'Test Address',
      numPol: '12345678',
      email: 'test@gmail.com',
      phone: '12345678'
    },
    token: 'AC2232-121213-3434',
    urlCallback: 'https://wwww.callback.es',
    state: 200
  };

  constructor(private http: HttpClient) { }

  getuserData(): Observable<AuthorizationUserInfo> {
    // TODO: Metodo para obtener la información del usuario del servidor de transferencia.
    return of(this.mockUser);
  }

  registerUser(user) {
    // TODO: Metodo para registrar el usuario en el caso de que no existiese.
  }

  updateUser() {
    // TODO: Metodo para updatear el usuario en el caso de que no existiese.
  }

  loginUser() {
    // TODO: Metodo para logear al usuario en el caso de que todo haya ido correcto.
  }




}
