import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import {NumberService} from "../../../../services/number-typical/number.service";
import {Number} from "../number";

@Component({
  selector: 'app-number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.css']
})
export class NumberControlComponent implements OnInit{
  number: Number[] =[];
  role: any;
 constructor( private numberService: NumberService,   private router:Router) {
 }
  ngOnInit(): void {
  }

  addTypicalNum(){
    this.router.navigate(['typical-number/add']);
  }
  updateTypicalNum(id : number){
   this.router.navigate([`typical-number/update/${id}`]);
}
 deleteElement(id: number){
   let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");
   // if(option ==true){
   //    this.numberService.de
   // }
 }


  protected readonly Number = Number;
}
