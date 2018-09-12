import {User} from './user.model';
import {AuthData} from './auth-data-model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {TrainingService} from '../training/training.service';
import {MatSnackBar} from "@angular/material";

@Injectable()
export class AuthService {
  // this will help us to indicate wether if we are sign in or not.
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private trainingService: TrainingService,
              private snackBar: MatSnackBar) {

  }
  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true); // true - means you are logged in
        this.router.navigate(['/training']);
      } else {
        this.trainingService.cancelSubcription();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
      }).catch(error => {
      this.snackBar.open(error.message, null, {
        duration: 3000
      });
        console.log(error);
    });
  }

  login(authData: AuthData) {
   this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
     .then(result => {
       console.log(result);
     }).catch(error => {
       this.snackBar.open(error.message, null, {
         duration: 3000
     });
     console.log(error);
   });
  }

  onLogout() {
    this.afAuth.auth.signOut();

  }
  isAuth() {
    return this.isAuthenticated;
  }
}
