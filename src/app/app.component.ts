import { Component } from '@angular/core';
import {ProductComponent} from './product/product.component';
import {Routes} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitness-tracker';
}
