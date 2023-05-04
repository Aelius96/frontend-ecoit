import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {HomeMainComponent} from "./home/home-main/home-main.component";

const routes: Routes =[
  {
    path:'',redirectTo:'/trang-chu',pathMatch:'full',
  },
  {path:'trang-chu', component: HomeMainComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
