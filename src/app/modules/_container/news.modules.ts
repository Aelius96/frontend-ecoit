import {RouterModule, Routes} from "@angular/router";
import {BlogControlComponent} from "../blog/blog-control/blog-control.component";
import {BlogAddComponent} from "../blog/blog-add/blog-add.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NewsControlComponent} from "../news/news-control/news-control.component";
import {NewsAddComponent} from "../news/news-add/news-add.component";

const routes: Routes = [
  {path:'' , component: NewsControlComponent},
  {path: 'new', component: NewsAddComponent},
  {path:'update/:id' , component: NewsAddComponent},

]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class NewsModules{}
