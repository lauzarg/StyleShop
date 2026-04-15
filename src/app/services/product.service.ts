import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, CartItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Remera Deportiva Azul',
      price: 1500,
      image: 'https://via.placeholder.com/250x250?text=Remera+Azul',
      description: 'Remera deportiva de alta performance con tecnología transpirable',
      category: 'remeras'
    },
    {
      id: 2,
      name: 'Pantalón Running Negro',
      price: 2500,
      image: 'https://via.placeholder.com/250x250?text=Pantalon+Negro',
      description: 'Pantalón ideal para correr con bolsillos funcionales',
      category: 'pantalones'
    },
    {
      id: 3,
      name: 'Zapatillas Running Pro',
      price: 4500,
      image: 'https://via.placeholder.com/250x250?text=Zapatillas+Pro',
      description: 'Zapatillas de alta tecnología para running profesional',
      category: 'calzado'
    },
    {
      id: 4,
      name: 'Campera Impermeable',
      price: 3500,
      image: 'https://via.placeholder.com/250x250?text=Campera',
      description: 'Campera resistente al agua para entrenamientos al aire libre',
      category: 'camperas'
    },
    {
      id: 5,
      name: 'Shorts Deportivos',
      price: 1200,
      image: 'https://via.placeholder.com/250x250?text=Shorts',
      description: 'Shorts cómodos y ligeros para cualquier deporte',
      category: 'shorts'
    },
    {
      id: 6,
      name: 'Medias Deportivas',
      price: 300,
      image: 'https://via.placeholder.com/250x250?text=Medias',
      description: 'Medias con tecnología anti-sudor y amortiguación',
      category: 'accesorios'
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return new Observable(observer => {
      observer.next(this.products);
      observer.complete();
    });
  }

  getProductById(id: number): Observable<Product | undefined> {
    return new Observable(observer => {
      observer.next(this.products.find(p => p.id === id));
      observer.complete();
    });
  }
}
