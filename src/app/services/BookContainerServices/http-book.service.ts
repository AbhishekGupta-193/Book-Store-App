import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpBookService {
  baseUrl:string = "https://bookstore.incubation.bridgelabz.com";
  constructor(private httpClient:HttpClient) { }
  getBooks(endpoint:string){
    return this.httpClient.get(this.baseUrl+endpoint);
  }
}
