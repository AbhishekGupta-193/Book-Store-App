import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/cartServices/http.service';
import { CartService } from 'src/app/services/cartServices/cart.service';
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
  
  constructor(private router:Router,private http:HttpService,private cartService:CartService){}

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

  deleteFromMyCart(item:any){
    // console.log("_id: ",item._id);
    this.cartService.deleteFormCart('bookstore_user/remove_cart_item/'+item._id).subscribe({
      next:(res:any)=>{
        console.log("Delete from Cart");
        console.log(res);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
   }

   decreaseQuantity(item:any){
    // console.log("_id: ",item._id);
    let quantity = item.quantityToBuy;
    this.cartService.updateCart('bookstore_user/cart_item_quantity/'+item._id,quantity-1).subscribe({
      next:(res:any)=>{
        console.log("Update in Cart");
        console.log(res);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
   }
   increaseQuantity(item:any){
    // console.log("_id: ",item._id);
    let quantity = item.quantityToBuy;
    this.cartService.updateCart('bookstore_user/cart_item_quantity/'+item._id,quantity+1).subscribe({
      next:(res:any)=>{
        console.log("Update in Cart");
        console.log(res);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
   }

   isLoggedIn(){
    if(localStorage.getItem('accessToken')==null) return true;
    return false;
  }
}
