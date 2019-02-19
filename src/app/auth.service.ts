import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class signUpResponse {
  data: string;
  error: string;
}
export class AuthRepsonse {
  body: signUpResponse;
  statusCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup (form) : Observable<AuthRepsonse> {

    let serializedForm = JSON.stringify(form);
    return this.http.post<AuthRepsonse>('https://lutecz75th.execute-api.us-east-2.amazonaws.com/default/cognito-login',serializedForm);
  }

  isLoggedIn(){
    //JWT, check token is valid
    return true;
  }
}
