import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {HomeMainComponent} from "./modules/home/home-main/home-main.component";

import { BankingComponent } from "./modules/product/banking/banking.component";
import { GovernmentComponent } from "./modules/product/government/government.component";
import { BusinessComponent } from "./modules/product/business/business.component";
import { SecurityDefenseComponent } from "./modules/product/security-defense/security-defense.component";
import { AboutUsComponent } from "./modules/introduce/about-us/about-us.component";
import { CapacityProfileComponent } from "./modules/introduce/capacity-profile/capacity-profile.component";
import { TypicalCustomersComponent } from "./modules/introduce/typical-customers/typical-customers.component";
import { ContactComponent } from "./modules/contact/contact.component";

import { ErrorComponent } from "./modules/error/error.component";

import {NewsListComponent} from "./modules/news/news-list/news-list.component";
import {RecruitListComponent} from "./modules/recruit/recruit-list/recruit-list.component";
import {PostListComponent} from "./modules/post/post-list/post-list.component";
import {BlogListComponent} from "./modules/blog/blog-list/blog-list.component";


const routes: Routes =[
  { path:'',redirectTo:'/trang-chu',pathMatch:'full',}, // full khớp hoàn toàn
  {path:'trang-chu', component: HomeMainComponent},
  //sản phẩm
  { path: 'khach-hang-chinh-phu' , component:GovernmentComponent },
  {path: 'khach-hang-tai-chinh-ngan-hang' , component:BankingComponent},
  {path: 'khach-hang-doanh-nghiep' , component: BusinessComponent},
  {path: 'khach-hang-an-ninh-quoc-phong', component: SecurityDefenseComponent},

  // giới thiệu
  {path: 've-chung-toi' , component:AboutUsComponent},
  {path: 'ho-so-nang-luc' , component: CapacityProfileComponent},
  {path: 'khach-hang-tieu-bieu' , component: TypicalCustomersComponent},

  //
  {path: 'lien-he' , component: ContactComponent},

  {path: '404' , component:ErrorComponent},

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
