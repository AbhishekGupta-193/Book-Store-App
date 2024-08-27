import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/home/header/header.component';
import { LoginSignupComponent } from './components/authentication/login-signup/login-signup.component';
import { ForgetPasswordComponent } from './components/authentication/forget-password/forget-password.component';
import { UserProfileComponent } from './components/home/user-profile/user-profile.component';
import { WishlistComponent } from './components/home/wishlist/wishlist.component';
import { MyOrderComponent } from './components/home/my-order/my-order.component';
import { MyCartComponent } from './components/home/my-cart/my-cart.component';
import { BooksContainerComponent } from './components/home/books-container/books-container.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent,
    children:[
      {
        path:'',
        component:BooksContainerComponent
      },
      {
        path:'userProfile',
        component:UserProfileComponent
      },
      {
        path:'wishlist',
        component:WishlistComponent
      },
      {
        path:'myOrder',
        component:MyOrderComponent
      },
      {
        path:'myCart',
        component:MyCartComponent
      }
    ]
  },
  {
    path:'loginSignup',
    component:LoginSignupComponent
  },
  {
    path:'forgetPassword',
    component:ForgetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
