import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpService) { }
  addToCart(url: string) {
    const token = localStorage.getItem('accessToken');
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${token}`);
    return this.http.addItemToCart(url, true, { headers: myHeaders });
  }

  deleteFormCart(url: string) {
    const token = localStorage.getItem('accessToken');
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${token}`);
    return this.http.deleteItemFromCart(url, true, { headers: myHeaders });
  }

  updateCart(url: string, quantity: any) {
    const token = localStorage.getItem('accessToken');
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${token}`);
    const quantityToBuy = quantity;
    return this.http.updateInCart(url, true, { headers: myHeaders }, quantityToBuy);
  }

}
