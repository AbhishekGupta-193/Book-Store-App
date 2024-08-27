import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookCardComponent } from './components/home/book-card/book-card.component';
import {HttpClientModule} from '@angular/common/http';

//Angular Modules
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
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
    WishlistComponent,
    BookCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
