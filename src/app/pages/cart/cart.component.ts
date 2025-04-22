import { Component, inject } from '@angular/core';
import { CartStateService } from '../../services/cart-state.service';
import { ProductItemCart } from '../../interfaces/store.interfaces';
import { CartProductComponent } from '../../components/card-product/card-product.component';

@Component({
  selector: 'app-cart',
  imports: [CartProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
state = inject(CartStateService).state;

onRemove(id : number){
  this.state.remove(id);
}
onDecrease(product: ProductItemCart){
  this.state.update({
    product : product.product,
    quantity : product.quantity - 1,
  });
}
onIncrease(product: ProductItemCart){
  this.state.update({
    product : product.product,
    quantity : product.quantity + 1,
    });
  }
}