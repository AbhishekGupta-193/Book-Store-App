import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {
  isLoggedIn=false
  
  myOrders: any[] = [];
  ngOnInit() {


    //RETRIEVING MY DATA FROM LOCALSTORAGE (THESE ARE THE DATAS OF PRODUCTS WHICH HAD BEEN CHECKOUT)
    const savedItems = localStorage.getItem('ItemsForCheckout');
    if (savedItems) {
      this.myOrders = JSON.parse(savedItems);
    }
    if(localStorage.getItem('accessToken')!=null){
      this.isLoggedIn=true
    }
  }

  //FUNCTION TO FORMAT THE DATE FROM API INTO THE FORMAT LIKE "MAY 8 2024"
  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
    return formattedDate;
  }

  

}
