import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  constructor() { }

  addToCart(product: Product): void {
    const currentCart = this.cartItems.value;
    const existingItem = currentCart.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentCart.push({ product, quantity: 1 });
    }

    this.cartItems.next([...currentCart]);
  }

  removeFromCart(productId: number): void {
    const currentCart = this.cartItems.value;
    const filteredCart = currentCart.filter(item => item.product.id !== productId);
    this.cartItems.next(filteredCart);
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentCart = this.cartItems.value;
    const item = currentCart.find(item => item.product.id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartItems.next([...currentCart]);
      }
    }
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$;
  }

  getTotalPrice(): Observable<number> {
    return new Observable(observer => {
      this.cartItems$.subscribe(items => {
        const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        observer.next(total);
      });
    });
  }

  getTotalItems(): Observable<number> {
    return new Observable(observer => {
      this.cartItems$.subscribe(items => {
        const total = items.reduce((sum, item) => sum + item.quantity, 0);
        observer.next(total);
      });
    });
  }

  clearCart(): void {
    this.cartItems.next([]);
  }
}
