import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/store.interfaces';
import CardProductComponent from "../../../components/card-product/card-product.component";


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  imports: [CardProductComponent],
  
})
export default class ProductsListComponent {
  productService = inject(ProductService);
  products : Product []= [];

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe((resp)=>{
      this.products = resp;
      console.log(this.products);
    });
    }
  }
