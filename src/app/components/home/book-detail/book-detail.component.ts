import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpBookService } from 'src/app/services/BookContainerServices/http-book.service';
import { SharedDataService } from 'src/app/services/SharedData/shared-data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: any
  feedBackStars = ["#707070", "#707070", "#707070", "#707070", "#707070", "#707070"]


  constructor(private router: Router, private sharedData: SharedDataService, private http: HttpBookService) { }
  ngOnInit(): void {
    this.book = this.sharedData.getBook()
    // console.log('this is a book',this.book._id)
    this.http.getFeedback(this.book._id).subscribe({
      next: (res: any) => {
        let results = res.result
        results.map((result: any) => {

          result['feedBackStarsPlus'] = new Array(result.rating).fill(0)
          result['feedBackStarsMinus'] = new Array(5 - result.rating).fill(0)

        })
        console.log(results)

        this.book['feedback'] = res.result
        console.log(this.book)
      },
      error: (err) => {
        console.log(err)
      }
    })


  }

  handleStarsClick(id: any) {
    this.feedBackStars = this.feedBackStars.map((feedBackStar) => {
      return feedBackStar = "#707070"
    })
    this.feedBackStars = this.feedBackStars.map((feedBackStar, index) => {
      if (index <= id) {
        return feedBackStar = "#FFCE00"
      }
      else{
        return feedBackStar="#707070"
      }
    })
  }

}
