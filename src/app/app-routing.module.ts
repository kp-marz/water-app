import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: '',   redirectTo: '/signup', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
