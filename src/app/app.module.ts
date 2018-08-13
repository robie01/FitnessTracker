import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductsComponent} from './products.component';
import { ProductComponent } from './product/product.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ProductsService} from './products.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { TrainingComponent } from './training/training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {
  MatButtonModule, MatDatepicker, MatDatepickerModule, MatDatepickerToggle, MatFormFieldModule,
  MatInputModule, MatNativeDateModule
} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
  {path: 'product', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    SignUpComponent,
    LogInComponent,
    TrainingComponent,
    NewTrainingComponent,
    CurrentTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
