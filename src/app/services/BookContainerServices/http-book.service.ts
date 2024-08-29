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
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ4NDA2NzEsImV4cCI6MTcyNDkyNzA3MX0.m9t5LFoIOoS6nuUEh453a1M1faar-0QeoL82LcHlquA'
    })
    return this.httpClient.get(this.baseUrl+endpoint,{
      headers
    });

  }
  postFeedback(body:any,id:string){
    const endpoint=`/bookstore_user/add/feedback/${id}`
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type':'application/json',
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ4NDA2NzEsImV4cCI6MTcyNDkyNzA3MX0.m9t5LFoIOoS6nuUEh453a1M1faar-0QeoL82LcHlquA'
    })
  
    return this.httpClient.post(this.baseUrl+endpoint,body,{
      headers  
    },
  )
  }
}
