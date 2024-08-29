import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable ,OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpWishListService implements OnInit {
  baseUrl : string = "https://bookstore.incubation.bridgelabz.com/";
  token = localStorage.getItem('accessToken');
  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void { }
  getWishList(url:string,token:boolean,headers:any){
    return this.httpClient.get(this.baseUrl+url,token&&headers);
  }
  addWishList(url:string,token:boolean,headers:any){
    return this.httpClient.post(this.baseUrl+url,{},token&&headers);
  }
}
