import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/core/model/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

 
  customerList: Customer[] = [];
  role:string;
  constructor(private customerService: CustomerService,
              private router:Router, 
              private tokenStorageService: TokenStorageService,
             ) {
  }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken())
    this.listAll();
    const user = this.tokenStorageService.getUser();
    this.role =user.roles;
  }

 listAll(){
    this.customerService.getAllCustomer().subscribe(data =>{
        this.customerList =data;
    })
  }
}
