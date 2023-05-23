import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {RecuitControlComponent} from "../recruit/recuit-control/recuit-control.component";
import {RecruitAddComponent} from "../recruit/recruit-add/recruit-add.component";


const routes: Routes = [
  {path:'' , component: RecuitControlComponent},
  {path: 'addnew', component: RecruitAddComponent},
  {path:'update/:id' , component: RecruitAddComponent},

]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})


export class RecuitModule{}
