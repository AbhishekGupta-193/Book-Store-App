import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/home/header/header.component';
import { LoginSignupComponent } from './components/authentication/login-signup/login-signup.component';
import { ForgetPasswordComponent } from './components/authentication/forget-password/forget-password.component';
import { OrderPlacedPageComponent } from './components/home/order-placed-page/order-placed-page.component';
const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'loginSignup',
    component:LoginSignupComponent
  },
  {
    path:'forgetPassword',
    component:ForgetPasswordComponent
  },
  {
    path:'orderplaced',
    component:OrderPlacedPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
