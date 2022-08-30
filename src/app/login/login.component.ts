import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JewellaryPortalServiceService } from '../service/jewellary-portal-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private authService: SocialAuthService,private router: Router,
    private jewellaryService: JewellaryPortalServiceService,private http:HttpClient) { }
  registerForm:any =  FormGroup;
  loginForm:any =  FormGroup;
  submitted = false;
  error: any;
  get f() { return this.loginForm.controls; }
  get r() { return this.registerForm.controls; }
  onSubmitRegister(){
    const headers = new HttpHeaders();
    headers.append('Content-Type','multipart/form-data');
    headers.append('Accept','application/json');
    let options={
      headers:headers
    };
    this.jewellaryService.postRegisterCustomer(this.registerForm.value,options).subscribe(
      (data) => {
        console.log(data);
      },
      error => this.error = error
    );
  }
  onSubmit() {
    this.submitted = true;
    // // stop here if form is invalid
    if (this.loginForm.invalid) {
        // return false;
    }
    else
    {
      //True if all the fields are filled
      if(this.submitted)
      {
        alert("Great!!");
      }
    }
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithGoogle(): void {
    alert("H");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  ngOnInit(): void {
   this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    });
    this.registerForm=this.formBuilder.group({
      username: ['', [Validators.required]],
      registerEmail: ['', [Validators.required, Validators.email]],
      regsiterPhone: ['', [Validators.required]],
      regsiterPassword: ['', [Validators.required]],
      regsiterConfirmPassword: ['', [Validators.required]],
      genderType: ['', [Validators.required]],
    });
   
  }
}
