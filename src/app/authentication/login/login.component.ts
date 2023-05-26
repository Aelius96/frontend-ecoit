import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "Login failed!!";
  role: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenStorage) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getToken().roles;
      this.reloadPage();
    }
  }

  onSubmit(): void{
    this.authService.login(this.form).subscribe(data =>{
        console.log("User is logged in");
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.role = this.tokenStorage.getUser().roles;

        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      });
  }

  reloadPage(): void {
    this.router.navigate(['admin/dashboard']);
  }
}
