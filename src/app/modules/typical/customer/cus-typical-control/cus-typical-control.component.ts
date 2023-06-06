import { Component } from '@angular/core';
import { TypicalCustomer } from '../typical-customer';
import { Router } from '@angular/router';
import { TypicalCustomerService } from '../../../../services/typical-customer/typical-customer';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-cus-typical-control',
  templateUrl: './cus-typical-control.component.html',
  styleUrls: ['./cus-typical-control.component.css']
})
export class CusTypicalControlComponent {

  typicalcusList: TypicalCustomer[]=[]
  role: string;

  constructor(private router: Router, private typicalcusService: TypicalCustomerService ,
              private tokenSotrageService: TokenStorageService) {
  }

  listAll(){
    this.typicalcusService.listAll().subscribe(data=>{
      return this.typicalcusList = data;
    })
  }

  ngOnInit(): void {

    if(this.tokenSotrageService.getToken())
    this.listAll();
    const user = this.tokenSotrageService.getUser();
    this.role =user.roles;

  }

}
