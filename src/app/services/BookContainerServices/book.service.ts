import { Injectable } from '@angular/core';
import { HttpBookService } from './http-book.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpBook:HttpBookService) { }
  getBooksAPI(url:string){
    return this.httpBook.getBooks(`${url}`);
  }
}
