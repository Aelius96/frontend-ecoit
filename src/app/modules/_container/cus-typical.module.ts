import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CusTypicalControlComponent } from "../typical/customer/cus-typical-control/cus-typical-control.component";
import { CusTypicalAddComponent } from "../typical/customer/cus-typical-add/cus-typical-add.component";




const routes: Routes = [
    {path:'' , component: CusTypicalControlComponent},
    {path: 'new', component: CusTypicalAddComponent},
   
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class CusTypicalModule{}