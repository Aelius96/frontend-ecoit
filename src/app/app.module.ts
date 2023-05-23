import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";

import { HomeMainComponent } from './modules/home/home-main/home-main.component';

import { FooterComponent } from './modules/navigation/footer/footer.component';
import { HeaderComponent } from './modules/navigation/header/header.component';
import { BankingComponent } from './modules/product/banking/banking.component';
import { BusinessComponent } from './modules/product/business/business.component';
import { GovernmentComponent } from './modules/product/government/government.component';
import { SecurityDefenseComponent } from './modules/product/security-defense/security-defense.component';
import { AboutUsComponent } from './modules/introduce/about-us/about-us.component';
import { CapacityProfileComponent } from './modules/introduce/capacity-profile/capacity-profile.component';
import { TypicalCustomersComponent } from './modules/introduce/typical-customers/typical-customers.component';
import { ContactComponent } from './modules/contact/contact.component';

import { ErrorComponent } from './modules/error/error.component';
import{LoginComponent} from "./modules/authentication/login/login.component";
import {SignUpComponent} from "./modules/authentication/sign-up/sign-up.component";
import {BlogListComponent} from "./modules/blog/blog-list/blog-list.component";
import {NewsListComponent} from "./modules/news/news-list/news-list.component";
import {RecruitListComponent} from "./modules/recruit/recruit-list/recruit-list.component";
import {PostListComponent} from "./modules/post/post-list/post-list.component";
import { SideBarComponent } from './modules/navigation/side-bar/side-bar.component';
import { CustomerListComponent } from './modules/customer/customer-list/customer-list.component';
import { AboutHomeComponent } from './modules/about/about-home/about-home.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';

import {NumberHomeComponent} from "./modules/typical/number/number-home/number-home.component";
import { GalleryHomeComponent } from './modules/typical/gallery/gallery-home/gallery-home.component';

import { RecruitNewsComponent } from './modules/home/group/recruit-news/recruit-news.component';
import { CusTypicalHomeComponent } from './modules/typical/customer/cus-typical-home/cus-typical-home.component';
import { SliderListComponent } from './modules/sliders/slider-list/slider-list.component';
import { CustomerProductComponent } from './modules/group/customer-product/customer-product.component';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { HeaderAdminComponent } from './modules/admin/header-admin/header-admin.component';
import { AsideComponent } from './modules/admin/aside/aside.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { NumberControlComponent } from './modules/typical/number/number-control/number-control.component';
import { PostControlComponent } from './modules/post/post-control/post-control.component';
import { NumberAddComponent } from './modules/typical/number/number-add/number-add.component';
import { BlogControlComponent } from './modules/blog/blog-control/blog-control.component';
import { BlogAddComponent } from './modules/blog/blog-add/blog-add.component';
import { NewsControlComponent } from './modules/news/news-control/news-control.component';
import { NewsAddComponent } from './modules/news/news-add/news-add.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { RecuitControlComponent } from './modules/recruit/recuit-control/recuit-control.component';
import { RecruitAddComponent } from './modules/recruit/recruit-add/recruit-add.component';
import { CusotmerControlComponent } from './modules/customer/cusotmer-control/cusotmer-control.component';
import { GalleryControlComponent } from './modules/typical/gallery/gallery-control/gallery-control.component';
import { GalleryAddComponent } from './modules/typical/gallery/gallery-add/gallery-add.component';
import { CustomerAddComponent } from './modules/customer/customer-add/customer-add.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    FooterComponent,
    HeaderComponent,
    BankingComponent,
    BusinessComponent,
    GovernmentComponent,
    SecurityDefenseComponent,
    AboutUsComponent,
    CapacityProfileComponent,
    TypicalCustomersComponent,
    ContactComponent,
    ErrorComponent,
    BlogListComponent,
    NewsListComponent,
    RecruitListComponent,
    PostListComponent,
    SideBarComponent,
    CustomerListComponent,
    AboutHomeComponent,
    ProductListComponent,
    NumberHomeComponent,
    GalleryHomeComponent,
    RecruitNewsComponent,
    CusTypicalHomeComponent,
    SliderListComponent,
    CustomerProductComponent,
    LoginComponent,
    SignUpComponent,
    AdminComponent,
    HeaderAdminComponent,
    AsideComponent,
    DashboardComponent,
    NumberControlComponent,
    PostControlComponent,
    NumberAddComponent,
    BlogControlComponent,
    BlogAddComponent,
    NewsControlComponent,
    NewsAddComponent,
    RecuitControlComponent,
    RecruitAddComponent,
    CusotmerControlComponent,
    GalleryControlComponent,
    GalleryAddComponent,
    CustomerAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
