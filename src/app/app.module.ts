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

import {BlogListComponent} from "./modules/blog/blog-list/blog-list.component";
import {NewsListComponent} from "./modules/news/news-list/news-list.component";
import {RecruitListComponent} from "./modules/recruit/recruit-list/recruit-list.component";
import {PostListComponent} from "./modules/post/post-list/post-list.component";
import { SideBarComponent } from './modules/navigation/side-bar/side-bar.component';


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
    SideBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
