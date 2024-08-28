import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-placed-page',
  templateUrl: './order-placed-page.component.html',
  styleUrls: ['./order-placed-page.component.scss']
})
export class OrderPlacedPageComponent {
  constructor(private router:Router){}
  continueShopping(){
    this.router.navigate(['/header/']);
  }
}
