import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private fb: FormBuilder, 
              private router: Router,
              private authService: AuthService) { }

  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['',  [Validators.required, Validators.email]],
    password: ['',  Validators.required]
  });

  signUp(){
    this.authService.signup(this.signUpForm.getRawValue()).subscribe( result => {
      if(result.body.data)
        this.router.navigate(['dashboard']);
      else
        console.log("doh!");

    } );
  }

  gotoLogin(){
    this.router.navigate(['/login']);
  }

}
