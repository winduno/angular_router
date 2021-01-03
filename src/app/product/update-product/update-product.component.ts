import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  // @ts-ignore
  id: number;
  product: Product = {
    id: this.productForm.value.id,
    name: this.productForm.value.name,
    price: this.productForm.value.price,
    description: this.productForm.value.description
  };

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // this.product = await this.getProductById(this.id);
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
  }

  getProductById(id) {
    this.productService.getProductById(id).toPromise();
  }

  getProduct(id) {
    this.productService.getProductById(id).subscribe(result => {
      this.product = result;
    });
  }

  // @ts-ignore
  updateProduct(id) {
    this.productService.updateProduct(id, this.product).subscribe(() => {
      console.log('Thành công!!');
    }, () => {
      console.log('Lỗi cụ nó rồi');
    });
  }
}
