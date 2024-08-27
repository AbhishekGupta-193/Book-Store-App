import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  Login(email:string,password:string): Observable<any>{
    console.log("API for login is working");
    return  this.http.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login', { email, password });
  }
  
  Signup(signupData: any) : Observable<any>{
    console.log("API for Signup is working");
    console.log("data in api",signupData);

    return this.http.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration', signupData);
  }
  
}
