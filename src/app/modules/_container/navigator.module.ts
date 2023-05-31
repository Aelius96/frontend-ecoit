import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NaviControlComponent } from "../navigation/navigator-admin/navi-control/navi-control.component";
import { NaviAddComponent } from "../navigation/navigator-admin/navi-add/navi-add.component";


const routes: Routes = [
    {path:'' , component: NaviControlComponent},
    {path: 'new', component: NaviAddComponent},
    {path:'update/:id' , component: NaviAddComponent},
  
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })


export class NavigatorModule{}