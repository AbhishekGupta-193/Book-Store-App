import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/loginSignup/http.service';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {

  //  FOR EYE ICON OS PASSWORD INPUT
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  //FOR VISIBILTY OF LOGIN OR SIGNUP FORM
  isLoginPage: boolean = true;
  goToLogin() {
    this.isLoginPage = true
  }
  goToSignup() {
    this.isLoginPage = false
  }

  //LOGIN FORM REQUIREMENT
  loginForm!: FormGroup;
  login_email: string = '';
  login_password: string = '';

  //SIGNUP FORM REQUIREMENT
  signupForm!: FormGroup;
  signup_name: string = '';
  signup_email: string = '';
  signup_password: string = '';
  signup_contact: string = '';


  constructor(private formbuilder: FormBuilder, private http: HttpService, private router: Router) {
    this.loginForm = formbuilder.group({
      login_email: ['', Validators.required],
      login_password: ['', Validators.required]

    })
    this.signupForm = formbuilder.group({
      signup_name: ['', Validators.required],
      signup_email: ['', Validators.required],
      signup_password: ['', Validators.required],
      signup_contact: ['', Validators.required]
    })
  }

  //EVENT ON LOGIN FORM SUBMIT
  onLoginFormSubmit() {
    this.login_email = this.loginForm.get('login_email')?.value;
    this.login_password = this.loginForm.get('login_password')?.value;

    this.http.Login(this.login_email, this.login_password).subscribe({
      next: (res: any) => {
        //NAVIGATE TO DASHBOARD AFTER LOGIN
        this.router.navigate(['/header'])
      },
      error: (err: string) => {
        console.log("err: ", err);
      }
    })
  }


  //EVENT ON SIGNUP FORM SUBMIT
  onSignupFormSubmit() {
    this.signup_name = this.signupForm.get('signup_name')?.value;
    this.signup_email = this.signupForm.get('signup_email')?.value;
    this.signup_password = this.signupForm.get('signup_password')?.value;
    this.signup_contact = this.signupForm.get('signup_contact')?.value;

    let signupdata =
    {
      "fullName": this.signup_name,
      "email": this.signup_email,
      "password": this.signup_password,
      "phone": this.signup_contact
    }

    this.http.Signup(signupdata).subscribe({
      next: (res: any) => {
        //GO BACK TO LOGIN PAGE AFTER SIGNUP
        this.isLoginPage = true;
      },
      error: (err: string) => {
        console.log("err: ", err);
      }
    })
  }
}
