import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {News} from "../../../core/model/news/news";

@Component({
  selector: 'app-news-control',
  templateUrl: './news-control.component.html',
  styleUrls: ['./news-control.component.css']
})
export class NewsControlComponent {

newss: News[]=[]
constructor(private router:Router,
           ) {
}

  updateNews(id: number){
    return this.router.navigate(['new/update', id]);

  }



}
