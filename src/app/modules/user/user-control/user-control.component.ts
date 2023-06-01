import {Component, Injectable, OnInit} from '@angular/core';
import { User } from 'src/app/core/model/user/user';
import { UserAddComponent } from '../user-add/user-add.component';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import {UserService} from "../../../services/user/user.service";



@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})

export class UserControlComponent implements OnInit{

  users: User[]=[];

  modalRef?: NgbModalRef;
  constructor(private userService: UserService, private modalService: NgbModal ) { }


  ngOnInit(): void {
    this.userService.findAll().subscribe(data=>{
      this.users = data;
    })
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe();
  }

}
