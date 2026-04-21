import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  otp = '';
  generatedOtp: string | null = null;
  stage: 'email' | 'otp' = 'email';

  constructor(private authService: AuthService, private router: Router) {}

  sendOtp(): void {
    if (!this.email) {
      alert('Ingresa un email primero.');
      return;
    }
    this.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`OTP simulado: ${this.generatedOtp}`);
    this.stage = 'otp';
  }

  onLogin(): void {
    if (this.stage === 'email') {
      this.sendOtp();
      return;
    }

    // Verifica OTP simulado
    if (this.otp && this.generatedOtp === this.otp) {
      // reutiliza el login simulado (password no usado realmente)
      this.authService.login(this.email, this.otp);
      this.router.navigate(['/shop']);
    } else {
      alert('OTP inválido. Intenta nuevamente.');
    }
  }

  backToEmail(): void {
    this.stage = 'email';
    this.otp = '';
    this.generatedOtp = null;
  }
}
