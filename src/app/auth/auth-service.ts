import {User} from './user.model';
import {AuthData} from './auth-data-model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {TrainingService} from '../training/training.service';
import {MatSnackBar} from "@angular/material";
import {UiService} from "../shared/ui.service";

@Injectable()
export class AuthService {
  // this will help us to indicate wether if we are sign in or not.
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private trainingService: TrainingService,
              private uiService: UiService) {

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

  // creating user/ sign up
  registerUser(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.uiService.loadingStateChanged.next(false);
        console.log(result);
      }).catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackBar(error.message, null, 3000);
        console.log(error);
    });
  }
  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
   this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
     .then(result => {
       this.uiService.loadingStateChanged.next(false);
       console.log(result);
     }).catch(error => {
     this.uiService.loadingStateChanged.next(false);
     this.uiService.showSnackBar(error.message, null, 3000);
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
