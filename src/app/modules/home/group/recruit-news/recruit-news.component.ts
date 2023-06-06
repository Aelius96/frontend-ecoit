import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/core/model/news/news';
import { Recruit } from 'src/app/core/model/recuit/recuit';
import { NewsService } from 'src/app/services/news/news.service';
import { RecruitService } from 'src/app/services/recruit/recruit.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-recruit-news',
  templateUrl: './recruit-news.component.html',
  styleUrls: ['./recruit-news.component.css']
})
export class RecruitNewsComponent implements OnInit {

// recruit
recruitlist: Recruit[]=[];
role: string;

constructor(private router:Router,
            private recruitService: RecruitService,
            private tokenStorageService: TokenStorageService,
            private newsService: NewsService
   ) {  }
ngOnInit (): void {
  if( this.tokenStorageService.getToken())
  this.listAll_re();
  this.listAll_news();
  const user =this.tokenStorageService.getUser();
  this.role = user.roles;
}

listAll_re(){
  this.recruitService.listAll().subscribe(data => {
    return this.recruitlist = data;
  })
}


// news
  newsList: News[]=[];
  // role:string;




  // ngOnInit(): void {

  //   if(this.tokenStorageService.getToken())
  //   this.listAll();
  //   const user = this.tokenStorageService.getUser();
  //   this.role =user.roles;

  // }

  listAll_news(){
    this.newsService.listAll().subscribe(data =>{
      return this.newsList =data;
    })
  }


}
