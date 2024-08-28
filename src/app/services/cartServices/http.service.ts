import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getCartItems(): Observable<any> {
    console.log("getCart API is working");
    // Retrieve the token from local storage
    const token = localStorage.getItem('accessToken') || '';
    console.log("token from service: ",token);
    // Set the token in the headers
    const headers = new HttpHeaders().set('x-access-token', token);
    return this.http.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', { headers });
}


}
