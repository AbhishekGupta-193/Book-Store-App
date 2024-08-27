import { Component,OnInit,Input } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BookService } from 'src/app/services/BookContainerServices/book.service';
import { DataService } from 'src/app/services/BookContainerServices/data.service';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent implements OnInit {
  booksList:any[] = [];
  filteredProducts:any[] = [];  
  @Input() searchText:any;
  constructor(private bookService:BookService,private dataService:DataService) { }
  ngOnInit(): void {
    this.bookService.getBooksAPI('/bookstore_user/get/book').subscribe({
      next:(response:any)=>{
        this.booksList = response.result;
        this.filteredProducts=[...this.booksList];
        console.log(response);
      },
      error:(error)=>{
        console.log(error);
      }
    });
     
    this.dataService.currentMessage.subscribe((message)=>{
      this.searchText = message;
    });
    
  }
  onFilterChange(filter:any){
    this.filteredProducts=[...this.booksList];
    this.filteredProducts.sort((a:any,b:any)=>{
      return a[filter]-b[filter];
    });
  }
}
