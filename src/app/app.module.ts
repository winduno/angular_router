import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCreateComponent,
    ListProductComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
