import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',  Validators.required]
  });

  login(){
    if(this.loginForm.get('email').value === 'Tuna@tuna.com' &&
        this.loginForm.get('password').value === 'fish')
      this.router.navigate(['/dashboard']);
    else 
      console.log("Error");
  }
}
