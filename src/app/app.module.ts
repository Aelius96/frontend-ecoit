import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";

import { HomeMainComponent } from './modules/home/home-main/home-main.component';
import {BlogListComponent} from "./modules/blog/blog-list/blog-list.component";
import {NewsListComponent} from "./modules/news/news-list/news-list.component";
import {RecruitListComponent} from "./modules/recruit/recruit-list/recruit-list.component";
import {PostListComponent} from "./modules/post/post-list/post-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    BlogListComponent,
    NewsListComponent,
    RecruitListComponent,
    PostListComponent

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
