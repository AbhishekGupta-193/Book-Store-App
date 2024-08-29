import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<any> {
    console.log("getCart API is working");
    // Retrieve the token from local storage
    const token = localStorage.getItem('accessToken') || '';
    // Set the token in the headers
    const headers = new HttpHeaders().set('x-access-token', token);
    return this.http.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', { headers });
  }

  addItemToCart(url:string,token:boolean,headers:any): Observable<any> {
    console.log("addItemToCart API is working");
    return this.http.post('https://bookstore.incubation.bridgelabz.com/'+url,{},token&&headers);
  }

  deleteItemFromCart(url:string,token:boolean,headers:any): Observable<any> {
    console.log("addItemToCart API is working");
    return this.http.delete('https://bookstore.incubation.bridgelabz.com/'+url,token&&headers);
  }

  updateInCart(url:string,token:boolean,headers:any,quantityToBuy:number): Observable<any> {
    console.log("Update item in cart API is working");
    return this.http.put('https://bookstore.incubation.bridgelabz.com/'+url,{quantityToBuy},token&&headers);
  }

}
