import {Component, OnInit} from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{

  newsList : News[] = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.listAll();
  }

  public listAll(){
    this.newsService.listAll().subscribe(data =>{
      this.newsList = data;
    })

  }

}
