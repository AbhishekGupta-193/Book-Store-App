import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  isEmpty: boolean = true; 
  constructor(public router:Router){}

  login(){
    this.router.navigate(['/loginSignup']);
  }
  ngOnInit(){
    if(localStorage.getItem('accessToken') !== null)this.isEmpty=false;

  }

}
