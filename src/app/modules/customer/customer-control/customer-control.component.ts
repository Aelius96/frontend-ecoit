import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer/customer.service";
import {Customer} from "../../../core/model/customer/customer";
import {Router} from "@angular/router";
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-customer-control',
  templateUrl: './customer-control.component.html',
  styleUrls: ['./customer-control.component.css']
})
export class CustomerControlComponent implements OnInit{

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

  addCustomer(){
    this.router.navigate([`/admin/customer/add`])
  }



  updateCustomer(id:number){
    this.router.navigate([`/admin/customer/update/${id}`])
  }

  deleteCustomer(id: number){
    let option = confirm("Bạn có chắc chắn xóa khách hàng này?");

    if(option){
      this.customerService.deleteCustomer(id).subscribe(data =>{
        this.listAll();
      })
    }
  }
}
