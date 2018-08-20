import {User} from './user.model';
import {AuthData} from './auth-data-model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  // this will help us to indicate wether if we are sign in or not.
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {

  }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
   this.authSuccessfully();
  }

  onLogout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }
  authSuccessfully() {
    this.authChange.next(true); // true - means you are logged in
    this.router.navigate(['/training']);
  }

  getUser() {
    return this.user;
  }
  isAuth() {
    return this.user !== null;
  }
}
