import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor() {
  }

  // getAllProduct(): Observable<Product[]> {
  //   return this.http.get<Product[]>(API_URL + `/products`);
  // }
  addNewProduct(product: Product) {
    this.products.push(product);
  }

  getAll() {
    return this.products;
  }
}
