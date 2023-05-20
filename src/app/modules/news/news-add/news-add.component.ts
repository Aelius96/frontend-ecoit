import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {News} from "../../../core/model/news/news";

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent {

  new: News= new News()

  fileToUpload:string [] = [];
  url: any;
  id: any;
  ckeConfig: any;


  constructor(private router:Router) {
  }




  imageChange(e: any){
    const files = e.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.fileToUpload=files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) =>{
      this.url= reader.result;
    }
  }
}
