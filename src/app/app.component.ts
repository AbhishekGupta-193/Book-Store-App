import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Book_Store_App';
 
  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.style.margin='0'
  }
  
}
