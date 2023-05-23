import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CusotmerControlComponent} from "../customer/cusotmer-control/cusotmer-control.component";
import {CustomerAddComponent} from "../customer/customer-add/customer-add.component";



const routes: Routes = [
  {path:'' , component: CusotmerControlComponent},
  {path: 'new', component: CustomerAddComponent},
  {path:'update/:id' , component: CustomerAddComponent},

]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CustomerModule{}
