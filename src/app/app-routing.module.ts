import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {UpdateProductComponent} from './product/update-product/update-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-product', component: ProductCreateComponent},
  {path: 'list-product', component: ListProductComponent},
  {path: 'update-product/:id', component: UpdateProductComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
