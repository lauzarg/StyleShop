import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  totalItems$: Observable<number>;

  constructor(private cartService: CartService) {
    this.totalItems$ = this.cartService.getTotalItems();
  }

  ngOnInit(): void {
  }
}
