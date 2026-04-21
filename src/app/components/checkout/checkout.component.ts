import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CheckoutService, CheckoutResponse } from '../../services/checkout.service';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  isProcessing: boolean = false;
  checkoutSuccess: boolean = false;
  checkoutResponse: CheckoutResponse | null = null;
  checkoutError: string = '';

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
    // Obtener items del carrito
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      if (items.length === 0 && !this.checkoutSuccess) {
        this.router.navigate(['/cart']);
      }
    });

    // Obtener total
    this.cartService.getTotalPrice().subscribe(total => {
      this.totalPrice = total;
    });
  }

  // Getters para acceso fácil a los controles del formulario
  get f() {
    return this.checkoutForm.controls;
  }

  onSubmit(): void {
    if (this.checkoutForm.invalid || this.cartItems.length === 0) {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.checkoutForm.controls).forEach(key => {
        this.checkoutForm.controls[key].markAsTouched();
      });
      return;
    }

    this.isProcessing = true;
    this.checkoutError = '';

    const clienteData = {
      nombre: this.checkoutForm.value.nombre,
      email: this.checkoutForm.value.email,
      direccion: this.checkoutForm.value.direccion
    };

    this.checkoutService.processCheckout(clienteData, this.cartItems).subscribe({
      next: (response) => {
        this.isProcessing = false;
        this.checkoutSuccess = true;
        this.checkoutResponse = response;
        this.cartService.clearCart();
      },
      error: (error) => {
        this.isProcessing = false;
        this.checkoutError = 'Error al procesar el pago. Por favor, intente nuevamente.';
        console.error('Checkout error:', error);
      }
    });
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
