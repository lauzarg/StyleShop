import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products$: Observable<Product[]>;
  selectedCategory: string = '';
  filteredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.products$ = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.products$.subscribe(products => {
      this.filteredProducts = products;
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.products$.subscribe(products => {
      if (category) {
        this.filteredProducts = products.filter(p => p.category === category);
      } else {
        this.filteredProducts = products;
      }
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  getCategories(): string[] {
    const categories: Set<string> = new Set();
    this.products$.subscribe(products => {
      products.forEach(p => categories.add(p.category));
    });
    return Array.from(categories);
  }
}
