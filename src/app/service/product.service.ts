import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
const API_URL = `${environment.API_URL}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + `/products`);
  }

  addNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + `/products`, product);
  }

  getProductById(id: number): Observable<Product> {
    return  this.http.get<Product>(API_URL + `/products/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(API_URL + `/products/${id}`, product);
  }
}
