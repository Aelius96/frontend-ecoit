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
    {path: 'recuit' , title:'admin-tuyển dụng', loadChildren:()=> import('./recuit.module').then(m=>m.RecuitModule)},
    {path: 'customer' , title:'admin-khách hàng' , loadChildren:()=>import('./customer.module').then(m=>m.CustomerModule)},
    {path: 'image-gallery', title:'admin-khách hàng tiêu biểu', loadChildren:()=>import('./gallery.module').then(m=>m.GalleryModule) },

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
