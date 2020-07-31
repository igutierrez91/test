import { Injectable } from '@angular/core';
import { User, AuthorizationUserInfo } from '../models/user';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subject = new Subject<AuthorizationUserInfo>();
  private user = {} as AuthorizationUserInfo;

  setDataUserAuthorizationInfo(user: AuthorizationUserInfo) {
    this.user = user;
    this.subject.next(user);
  }

  setTokenUser(token: string) {
    this.user.token = token;
    this.subject.next(this.user);
  }

  clearData() {
    this.subject.next();
  }

  getDataUser(): Observable<AuthorizationUserInfo> {
    return this.subject.asObservable();
  }

  constructor() { }

}
