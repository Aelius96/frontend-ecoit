import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../admin/dashboard/dashboard.component";
import {AdminComponent} from "../admin/admin/admin.component";
import { UserControlComponent } from "../user/user-control/user-control.component";
import { HistoryListComponent } from "../admin/history/history-list/history-list.component";


const routes: Routes =[

  {path: '' , title:'Admin-Ecoit' , component: AdminComponent,

  children:[
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'post' , title:'Admin-tin tức', loadChildren:()=> import('./post.module').then(m=>m.PostModule)},
    {path: 'blogs' , title:'Admin-blog', loadChildren:()=> import('./blog.module').then(m=>m.BlogModule)},
    {path: 'news' , title:'Admin-tin tức', loadChildren:()=> import('./news.modules').then(m=>m.NewsModules)},
    {path: 'recuit' , title:'Admin-tuyển dụng', loadChildren:()=> import('./recuit.module').then(m=>m.RecuitModule)},
    {path: 'customer' , title:'Admin-khách hàng' , loadChildren:()=>import('./customer.module').then(m=>m.CustomerModule)},
    {path: 'image-gallery', title:'Admin-khách hàng tiêu biểu', loadChildren:()=>import('./gallery.module').then(m=>m.GalleryModule) },
    {path: 'user', title:'Admin-tài khoản', component:UserControlComponent },
    {path:'history' , title: 'Admin-lịch sử sử đổi' , component: HistoryListComponent},
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
