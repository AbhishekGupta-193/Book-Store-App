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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookCardComponent } from './components/home/book-card/book-card.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';

//Angular Modules
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { OrderPlacedPageComponent } from './components/home/order-placed-page/order-placed-page.component';



import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


import {MatInputModule} from "@angular/material/input";
import { FormsModule } from '@angular/forms';
import { MyCartComponent } from './components/home/my-cart/my-cart.component';


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
    OrderPlacedPageComponent,
    SearchPipe,
    MyCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
