import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {HomeMainComponent} from "./modules/home/home-main/home-main.component";
import {NewsListComponent} from "./modules/news/news-list/news-list.component";
import {RecruitListComponent} from "./modules/recruit/recruit-list/recruit-list.component";
import {PostListComponent} from "./modules/post/post-list/post-list.component";
import {BlogListComponent} from "./modules/blog/blog-list/blog-list.component";

const routes: Routes =[
  {
    path:'',redirectTo:'/trang-chu',pathMatch:'full',
  },
  {path:'trang-chu', component: HomeMainComponent},
  {path:'news',component:NewsListComponent},
  {path:'recruit',component: RecruitListComponent},
  {path:'post', component: PostListComponent},
  {path:'blog', component: BlogListComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
