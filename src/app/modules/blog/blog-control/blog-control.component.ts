import { Component, OnInit } from '@angular/core';
import {NumberService} from "../../../services/number-typical/number.service";
import {Router} from "@angular/router";
import {Blog} from "../../../core/model/blog/blog";
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-control',
  templateUrl: './blog-control.component.html',
  styleUrls: ['./blog-control.component.css']
})
export class BlogControlComponent implements OnInit {

  bloglist: Blog[]=[]
  role:string;

  constructor( private router:Router,
              private tokenStorageService: TokenStorageService,
              private blogService: BlogService ) {
  }
  ngOnInit(): void {
   if(this.tokenStorageService.getToken())
   this.listAll();
   const user = this.tokenStorageService.getUser();
   this.role =user.roles
  }

  listAll(){
    this.blogService.listAll().subscribe(data =>{
      return this.bloglist=data
    })
  }
   

}
