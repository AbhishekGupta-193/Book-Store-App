import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book:any;
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
  constructor() { }
  ngOnInit(): void { 
    this.selectedImagePath = this.getRandomImagePath();
   }
   getRandomImagePath(){
     let index = Math.floor(Math.random()*this.imagePaths.length);
     return this.imagePaths[index];
   }
}
