import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
   hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  isLoginPage:boolean=true;
  goToLogin(){
    this.isLoginPage=true
  }
  goToSignup(){
    this.isLoginPage=false
  }
}
