import { RouterModule, Routes } from "@angular/router";
import { AboutControlComponent } from "../about/about-control/about-control.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutAdressComponent } from "../about/about-adress/about-adress.component";



const routes: Routes = [
    {path:'' , component: AboutControlComponent},
    {path:'adress' , component:AboutAdressComponent},
    
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class  AboutModule{}