import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.checkInitialAuth());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {}

  login(email: string, password: string): boolean {
    // Simulación: acepta cualquier email y password no vacíos
    if (email && password) {
      this.isAuthenticatedSubject.next(true);
      localStorage.setItem('isLoggedIn', 'true'); // Persistencia básica
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('isLoggedIn');
  }

  private checkInitialAuth(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  public isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }
}