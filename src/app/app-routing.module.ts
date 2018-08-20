import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {LogInComponent} from './auth/log-in/log-in.component';
import {TrainingComponent} from './training/training.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'login', component: LogInComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'training', component: TrainingComponent, canActivate: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
