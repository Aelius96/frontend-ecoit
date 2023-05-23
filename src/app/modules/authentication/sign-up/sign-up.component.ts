import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isSignUpFailed: any;
  isSuccessful: any;
  errorMessage="";
  form: any ={};

  constructor(private authService:AuthService) {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(data =>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.errorMessage = "Đăng ký thành công!!"
      },
      err =>{
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      })
  }
}
