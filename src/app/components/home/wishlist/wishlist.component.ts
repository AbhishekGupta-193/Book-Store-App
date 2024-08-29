import { Component ,OnInit} from '@angular/core';
import { WishListService } from 'src/app/services/WishlistServices/wish-list.service';
 
interface WishListItem{
  product_id: any;
  price: any;
  discountPrice: any;
  bookName: any;
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
      },
      error:(err:any)=>{
        console.log(err);
      }
     });
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