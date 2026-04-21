import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { CartItem } from '../models/product.model';

export interface CheckoutPayload {
  cliente: {
    nombre: string;
    email: string;
    direccion: string;
  };
  items: Array<{
    productoId: number;
    nombre: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
  }>;
  total: number;
  fecha: string;
}

export interface CheckoutResponse {
  success: boolean;
  operacionId: string;
  cae?: string;
  vencimientoCae?: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() {}

  /**
   * Procesa la compra y genera la factura electrónica.
   * Fase actual: Simulación local (sin backend).
   * Fase futura: Reemplazar por HttpClient.post() al endpoint /api/checkout.
   * El backend procesará la compra y luego se comunicará con ARCA (ex AFIP)
   * para generar la factura electrónica correspondiente (CAE).
   */
  processCheckout(
    clienteData: { nombre: string; email: string; direccion: string },
    cartItems: CartItem[]
  ): Observable<CheckoutResponse> {

    // Armar el payload con la estructura preparada para ARCA
    const payload: CheckoutPayload = {
      cliente: clienteData,
      items: cartItems.map(item => ({
        productoId: item.product.id,
        nombre: item.product.name,
        cantidad: item.quantity,
        precioUnitario: item.product.price,
        subtotal: item.product.price * item.quantity
      })),
      total: cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
      fecha: new Date().toISOString()
    };

    // Log del payload que se enviaría al backend/ARCA
    console.log('=== CHECKOUT PAYLOAD (preparado para ARCA) ===');
    console.log(JSON.stringify(payload, null, 2));

    // --- SIMULACIÓN ---
    // Cuando exista el backend, reemplazar este bloque por:
    // return this.http.post<CheckoutResponse>('/api/checkout', payload);
    const operacionId = 'OP-' + Date.now().toString(36).toUpperCase();
    const caeSimulado = Math.floor(Math.random() * 90000000000000 + 10000000000000).toString();

    const response: CheckoutResponse = {
      success: true,
      operacionId: operacionId,
      cae: caeSimulado,
      vencimientoCae: this.getFutureDate(10),
      mensaje: `Compra procesada exitosamente. Operación: ${operacionId}`
    };

    // Simular delay de procesamiento (2 segundos)
    return of(response).pipe(delay(2000));
  }

  private getFutureDate(days: number): string {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
  }
}
