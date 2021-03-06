import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductsComponent} from './products.component';
import { ProductComponent } from './product/product.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/stop-training/stop-training.component';
import {AuthService} from './auth/auth-service';
import {TrainingService} from './training/training.service';
import {AuthGuard} from './auth/auth.guard';
import {CdkTableModule} from '@angular/cdk/table';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {UiService} from './shared/ui.service';

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
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    CdkTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatSortModule,
    MatPaginatorModule,
    AngularFireAuthModule,
    MatSnackBarModule
  ],
  providers: [ProductsService, AuthService, TrainingService, AuthGuard, UiService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
