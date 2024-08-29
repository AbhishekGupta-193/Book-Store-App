import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book:any;
  @Output() navToCardDetail=new EventEmitter()
  outOfStock=false
  imagePaths:string[]=[
    '../../../../assets/Books/Book1.png',
    '../../../../assets/Books/Book2.png',
    '../../../../assets/Books/Book3.png',
    '../../../../assets/Books/Book4.png',
    '../../../../assets/Books/Book5.png',
    '../../../../assets/Books/Book6.png',
    '../../../../assets/Books/Book7.png',
    '../../../../assets/Books/Book8.png',
    '../../../../assets/Books/Book9.png',
  ];
  selectedImagePath:string = '';
  constructor(private router:Router) { }
  ngOnInit(): void { 
    this.selectedImagePath = this.getRandomImagePath();
    if(this.book.quantity<=5){
      this.outOfStock=true
    }
    
   }
   getRandomImagePath(){
     let index = Math.floor(Math.random()*this.imagePaths.length);
     return this.imagePaths[index];
   }
   handleClick(){
    // this.router.navigate(['/header/bookDetail'], { state: { book: this.book } })
    this.book['img']=this.selectedImagePath
    this.navToCardDetail.emit(this.book)
    
   }
}
