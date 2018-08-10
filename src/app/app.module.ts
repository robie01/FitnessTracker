import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductsComponent} from './products.component';
import { ProductComponent } from './product/product.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'product', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
