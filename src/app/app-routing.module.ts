import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/home/header/header.component';
import { BooksContainerComponent } from './components/home/books-container/books-container.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent}, //Navbar Component
  // {path:'home',component:BooksContainerComponent}, //BooksContainer Component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
