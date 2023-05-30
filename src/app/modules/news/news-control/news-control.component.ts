import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-news-control',
  templateUrl: './news-control.component.html',
  styleUrls: ['./news-control.component.css']
})
export class NewsControlComponent implements OnInit{

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

  updateNews(id: number){
    return this.router.navigate([`/admin/news/edit`,id]);

  }

  deleteNews(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

    if(option){
      this.newsService.deleteNews(id).subscribe(data=>{
        this.newsService.listAll();
      })
    }
  }

}
