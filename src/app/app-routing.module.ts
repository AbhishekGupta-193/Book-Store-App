import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/home/header/header.component';
import { LoginSignupComponent } from './components/authentication/login-signup/login-signup.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {
    path:'loginSignup',
    component:LoginSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
