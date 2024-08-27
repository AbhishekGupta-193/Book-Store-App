import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[],searchText:string): any[] {
    if(!items){
      return [];
    }
    if(!searchText){
      return items;
    }
    searchText=searchText.toLowerCase();
    return items.filter((item:any)=>{
      return item.description.toLowerCase().includes(searchText) || item.discountPrice.toString().includes(searchText) || item.price.toString().includes(searchText) 
           || item.author.toLowerCase().includes(searchText) || item.bookName.toLowerCase().includes(searchText);
    });
  }

}
