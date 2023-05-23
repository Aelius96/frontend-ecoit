import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {News} from "../../../core/model/news/news";
import  ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit{

 public Editor= ClassicEditor;
 content = new FormControl('', [Validators.required]);

  new: News= new News()

  fileToUpload:string [] = [];
  url: any;
  id: any;
  ckeConfig: any;


  checkCKEditor: any=false;


  constructor(private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit() {
 

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
