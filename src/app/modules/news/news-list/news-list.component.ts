import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/core/model/news/news';
import { NewsService } from 'src/app/services/news/news.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{
 
  // newsList: News[]=[];

  // constructor(private newService: NewsService){}
  // ngOnInit(): void {
   
  // }

  // public  getAllnew():void{
  //   this.newService.listAll().subscribe(
  //     (response:News[])=>{
  //       this.newsList = response;
  //       console.log(this.newsList)
  //     }
  //   )
  // }

  newsList: News[]=[];
  role:string;

  constructor(private router:Router, private newsService: NewsService,
              private tokenStorageService: TokenStorageService) {}



  ngOnInit(): void {

    if(this.tokenStorageService.getToken())
    this.listAll();
    const user = this.tokenStorageService.getUser();
    this.role =user.roles;

  }

  listAll(){
    this.newsService.listAll().subscribe(data =>{
      return this.newsList =data;
    })
  }

}
