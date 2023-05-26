import { Component, Injectable } from '@angular/core';
import { User } from 'src/app/core/model/user/user';
import { UserAddComponent } from '../user-add/user-add.component';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';



@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
 
export class UserControlComponent {


  users: User[]=[]

  
  modalRef?: NgbModalRef;
  constructor(private modalService: NgbModal ) { }



  addNew(){
    this.modalRef = this.modalService.open(UserAddComponent, {
      centered: true,
      backdrop: false,
      animation:true,
      
    });
  }

}
