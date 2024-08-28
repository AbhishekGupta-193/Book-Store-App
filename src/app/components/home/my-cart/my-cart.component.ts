import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent {
  IsOrderSummaryVisible:boolean=false;

  addressView1:boolean=true;
  addressView2:boolean=false;
  addressView3:boolean=false;

  readyForCheckout:boolean=false;
  changeOrderSummaryVisibility(){
    this.IsOrderSummaryVisible=true;
    this.addressView2=false;
    this.addressView3=true;
  }
  changeAddressDetailsVisibility(){
    this.addressView1=false;
    this.addressView2=true;
  }
  placeOrder(){
    this.addressView1=false;
    this.addressView2=true;
  }
  constructor(private router:Router){}
  checkout(){
    this.router.navigate(['/header/orderplaced'])
  }
}
