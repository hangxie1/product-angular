import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from './service/product.service';

@Component({
  selector: 'lets-react-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }

}
