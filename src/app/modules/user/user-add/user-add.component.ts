import { Component } from '@angular/core';


@Component({
  selector: 'app-user-add',
  templateUrl:'./user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent {


  id: any

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";


}
