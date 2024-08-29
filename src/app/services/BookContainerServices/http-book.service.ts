import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpBookService {
  baseUrl: string = "https://bookstore.incubation.bridgelabz.com";
  constructor(private httpClient: HttpClient) { }
  getBooks(endpoint: string) {
    return this.httpClient.get(this.baseUrl + endpoint);
  }
  getFeedback(id: string) {
    const endpoint = `/bookstore_user/get/feedback/${id}`;
    const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'x-access-token': token
    })
    return this.httpClient.get(this.baseUrl+endpoint,{
      headers
    });

  }
  postFeedback(body:any,id:string){
    const endpoint=`/bookstore_user/add/feedback/${id}`
    const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type':'application/json',
      'x-access-token': token
    })
  
    return this.httpClient.post(this.baseUrl+endpoint,body,{
      headers  
    },
  )
  }
}
