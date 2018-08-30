import {User} from './user.model';
import {AuthData} from './auth-data-model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  // this will help us to indicate wether if we are sign in or not.
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router,
              private afAuth: AngularFireAuth) {

  }

  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authSuccessfully();
      }).catch(error => {
        console.log(error);
    });
  }

  login(authData: AuthData) {
   this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
     .then(result => {
       console.log(result);
       this.authSuccessfully();
     }).catch(error => {
     console.log(error);
   });
  }

  onLogout() {
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }
  authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true); // true - means you are logged in
    this.router.navigate(['/training']);
  }


  isAuth() {
    return this.isAuthenticated;
  }
}
