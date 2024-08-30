import { Component, OnInit, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookService } from 'src/app/services/BookContainerServices/book.service';
import { DataService } from 'src/app/services/BookContainerServices/data.service';
import { SharedDataService } from 'src/app/services/SharedData/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent implements OnInit {
  booksList: any[] = [];
  filteredProducts: any[] = [];
  isLoading:boolean=true;
  //OBJECTS REQUIRED FOR PAGINATOR
  totalBooks: number = 100;
  pageSize: number = 8;
  currentPage: number = 1;
  paginatedBooks: any[] = [];
  pages: number[] = [];

  @Input() searchText: any;

  constructor(private bookService: BookService, private dataService: DataService, private sharedData: SharedDataService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getBooksAPI('/bookstore_user/get/book').subscribe({
      next: (response: any) => {
        this.booksList = response.result;
        this.isLoading=false;
        this.filteredProducts = [...this.booksList];
        this.totalBooks = this.booksList.length;
        this.pages = Array(Math.ceil(this.totalBooks / this.pageSize)).fill(0).map((x, i) => i + 1);
        this.updatePaginatedBooks();
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.dataService.currentMessage.subscribe((message) => {
      this.searchText = message;
    });
  }

  //PAGINATOR FUNCTION : FOR PAGE CHANGE
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.updatePaginatedBooks();
  }

  //PAGINATOR FUNCTION : FOR PREVIOUS PAGE BUTTON
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedBooks();
    }
  }
  //PAGINATOR FUNCTION : FOR NEXT PAGE BUTTON
  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
      this.updatePaginatedBooks();
    }
  }
  //PAGINATOR FUNCTION : ON PAGE NO. CLICK 
  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedBooks();
  }
  //PAGINATOR FUNCTION : FOR UPDATING BOOKS CONTENT PER PAGE
  updatePaginatedBooks() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    // this.paginatedBooks = this.booksList.slice(startIndex, endIndex);
    this.paginatedBooks=this.filteredProducts.slice(startIndex,endIndex);
  }

  onFilterChange(filter: any) {
    this.filteredProducts = [...this.booksList];
    this.filteredProducts.sort((a: any, b: any) => {
      return a[filter] - b[filter];
    });
    console.log(this.filteredProducts);
    this.updatePaginatedBooks();
  }

  navToCardDetail(book: any) {
    this.sharedData.setBook(book);
    this.router.navigate(['/header/bookDetail']);
  }
}
