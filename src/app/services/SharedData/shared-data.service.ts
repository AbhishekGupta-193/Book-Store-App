import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  book:any

  constructor() { }
  setBook(data:any){
    this.book=data
  }
  getBook(){
    return this.book
  }
}
