import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../admin/dashboard/dashboard.component";
import {AdminComponent} from "../admin/admin/admin.component";


const routes: Routes =[

  {path: '' , title:'Admin-Ecoit' , component: AdminComponent,

  children:[
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'post' , title:'admin-tin tức', loadChildren:()=> import('./post.module').then(m=>m.PostModule)},
    {path: 'blogs' , title:'admin-blog', loadChildren:()=> import('./blog.module').then(m=>m.BlogModule)},
    {path: 'news' , title:'admin-tin tức', loadChildren:()=> import('./news.modules').then(m=>m.NewsModules)},


  ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AdminModule{}
