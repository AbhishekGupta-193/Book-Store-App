import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home/header/header.component';
import { BooksContainerComponent } from './components/home/books-container/books-container.component';
import { ForgetPasswordComponent } from './components/authentication/forget-password/forget-password.component';
import { LoginSignupComponent } from './components/authentication/login-signup/login-signup.component';
import { UserProfileComponent } from './components/home/user-profile/user-profile.component';
import { BookDetailComponent } from './components/home/book-detail/book-detail.component';
import { MyOrderComponent } from './components/home/my-order/my-order.component';
import { WishlistComponent } from './components/home/wishlist/wishlist.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksContainerComponent,
    ForgetPasswordComponent,
    LoginSignupComponent,
    UserProfileComponent,
    BookDetailComponent,
    MyOrderComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
