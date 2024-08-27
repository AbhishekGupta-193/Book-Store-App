import { Component,OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BookService } from 'src/app/services/BookContainerServices/book.service';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent implements OnInit {
  booksList:any[] = [];
  constructor(private bookService:BookService) { }
  ngOnInit(): void {
    this.bookService.getBooksAPI('/bookstore_user/get/book').subscribe({
      next:(response:any)=>{
        this.booksList = response.result;
        console.log(response);
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }
}
