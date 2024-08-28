import { Component, inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/BookContainerServices/data.service';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  searchText:string='';
  constructor(private dataService:DataService) {}
  ngOnInit():void{}
  onSearch(){
    console.log(this.searchText);
    this.dataService.sendData(this.searchText);
  }
}
