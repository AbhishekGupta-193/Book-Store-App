import { Injectable ,OnInit} from '@angular/core';
import { HttpWishListService } from './http-wish-list.service';

@Injectable({
  providedIn: 'root'
})
export class WishListService implements OnInit {
  constructor(private httpWishList:HttpWishListService) { }
  ngOnInit(): void { }
  getWishList(url:string){
    const token = localStorage.getItem('accessToken');
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${token}`);
    return this.httpWishList.getWishList(url,true,{headers:myHeaders});
  }


  addWishList(url:string){
    const token = localStorage.getItem('accessToken');
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${token}`);
    return this.httpWishList.addWishList(url,true,{headers:myHeaders});
  }

  //keshav
  deleteWishList(url:string){
    const token = localStorage.getItem('accessToken');
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${token}`);
    return this.httpWishList.deleteWishList(url,true,{headers:myHeaders});
  }
}
