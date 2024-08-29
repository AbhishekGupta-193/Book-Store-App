import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/cartServices/http.service';
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
  itemSelectedForPlacingOrder:any;

  placeOrder(item:any){
    this.addressView1=false;
    this.addressView2=true;
    console.log("item: ",item);
    this.itemSelectedForPlacingOrder=item;
  }
  
  constructor(private router:Router,private http:HttpService){}

  ItemsForCheckout:any[]=[];
  checkout(){
    //REIDERCT TO ORDER PLACED PAGE ONCE PRODUCT IS CHECKED OUT
    this.router.navigate(['/header/orderplaced']);
    this.ItemsForCheckout.push(this.itemSelectedForPlacingOrder);
    //LOCALSTORAGE IS USED SO THAT ItemsForCheckout ARYAY CAN CONSISTS THE DATA GLOBALLY 
    localStorage.setItem('ItemsForCheckout', JSON.stringify(this.ItemsForCheckout));
    console.log(this.ItemsForCheckout); 
    }

 
  cartItems:any;
  ngOnInit(){
    //GETTING API DATA OF CART ITEMS
    this.http.getCartItems().subscribe({
      next: (res: any) => {
        console.log("cartItems: ", res.result[0]);
        this.cartItems=res.result;
      },
      error: (err: string) => {
        console.log("err: ", err);
      }
    })
    
    //SAVE THE PRODUCT DATA WHICH HAD BEEN CHECKOUT INTO MY ITEMSFORCHECKOUT ARRAY
    const savedItems = localStorage.getItem('ItemsForCheckout');
    if (savedItems) {
      this.ItemsForCheckout = JSON.parse(savedItems);
    }
  }
}
