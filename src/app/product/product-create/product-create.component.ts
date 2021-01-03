import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  addNewProductToList() {
    let product: Product = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      description: this.productForm.value.description
    };
    this.productService.addNewProduct(product).subscribe(() => {
      console.log('Thành công!!');
    }, () => {
      console.log('Lỗi cụ nó rồi');
    });
    this.productForm.reset();
  }
}
