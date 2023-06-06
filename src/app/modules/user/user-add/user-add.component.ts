import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../core/model/user/user";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-user-add',
  templateUrl:'./user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent implements OnInit{

  user : User = new User();
  id: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  type: any;
  constructor(private authService: AuthService,private userService: UserService,private router: Router,private route:ActivatedRoute) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.userService.getUserById(this.id).subscribe(data => {
        this.user = data;
      })
    }
  }


  goToUserList(){
    return this.router.navigate([`admin/user`])
  }
  onSubmit() {

    if(this.id){
      this.userService.updateUser(this.id,this.user).subscribe(() =>

        this.goToUserList()
      )
    }else{
      this.authService.register(this.user).subscribe(data =>{

          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.errorMessage = "Đăng ký thành công!!"
          console.log(this.user);
        },
        err =>{
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        })
    }
  }

}
