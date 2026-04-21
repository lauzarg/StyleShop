import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.services'; // Agrega esto
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  totalItems$: Observable<number>;
  isAuthenticated$: Observable<boolean>; // Agrega esto

  constructor(private cartService: CartService, private authService: AuthService) { // Agrega authService
    this.totalItems$ = this.cartService.getTotalItems();
    this.isAuthenticated$ = this.authService.isAuthenticated$; // Agrega esto
  }

  ngOnInit(): void {}

  logout(): void { // Agrega este método
    this.authService.logout();
  }
}
