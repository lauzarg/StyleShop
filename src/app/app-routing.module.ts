import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component'; // Agrega esto
import { AuthGuard } from './guards/auth.guard'; // Agrega esto

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }, // Nueva ruta
  { path: 'shop', component: CatalogComponent, canActivate: [AuthGuard] }, // Protegida
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] }, // Protegida
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
