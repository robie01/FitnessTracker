import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {ProductsComponent} from './products.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {LogInComponent} from './auth/log-in/log-in.component';
import {TrainingComponent} from './training/training.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'login', component: LogInComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'training', component: TrainingComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
