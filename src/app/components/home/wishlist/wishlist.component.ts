import { Component ,OnInit} from '@angular/core';
import { WishListService } from 'src/app/services/WishlistServices/wish-list.service';
 
interface WishListItem{
  product_id: any;
  price: any;
  discountPrice: any;
  bookName: any;
  imagePath?: string; // Add imagePath property
}
 
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  product_id !: '';
  isEmpty:boolean=false;
  wishList:WishListItem[]= [];
  wishlist:any[]=[];
  // randomImagePath: string = '';
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
  ]
  constructor(private wishListService:WishListService) { }
  ngOnInit(): void {
     this.wishListService.getWishList('bookstore_user/get_wishlist_items').subscribe({
      next:(res:any)=>{
        console.log(res.result);
        this.wishList = res.result.filter((item:WishListItem) =>item.product_id!==null);
        this.assignRandomImages();
      },
      error:(err:any)=>{
        console.log(err);
      }
     });
    //  this.randomImagePath=this.getRandomImagePath();
  }

  assignRandomImages(): void {
    this.imagePaths = this.shuffleArray(this.imagePaths);
    this.wishList.forEach((item, index) => {
      item.imagePath = this.imagePaths[index % this.imagePaths.length];
    });
  }

  shuffleArray(array:string[]):string[]{
    for(let i=array.length-1;i>0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  isWishListEmpty(){
    if(localStorage.getItem('accessToken')==null) return true;
    return false;
  }

  getRandomImagePath():string{
    let index=Math.floor(Math.random()*this.imagePaths.length);
    return this.imagePaths[index];
  }

  deleteWishListItem(book_id:any){
    this.wishListService.deleteWishList('bookstore_user/remove_wishlist_item/'+book_id).subscribe({
      next:(res:any)=>{
        console.log(res);
        window.location.reload();
      },
      error:(err:any)=>{
        console.log(err);
      }
    });
  }

}