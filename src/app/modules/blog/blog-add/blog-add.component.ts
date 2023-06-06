import { Component, OnInit } from '@angular/core';
import {Blog} from "../../../core/model/blog/blog";
import {ActivatedRoute, Router} from "@angular/router";
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { Constant } from 'src/app/core/config/constant';
import { tick } from '@angular/core/testing';
import { BlogService } from '../../../services/blog/blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  blogs: Blog= new Blog();
  fileToUpload:string [] = [];
  url: any;
  id: any;
  ckeConfig: any;
  baseUrl = `${Constant.BASE_URL}`
  message =''
constructor(private router:Router,
              private route: ActivatedRoute,
              private blogService : BlogService) {
}
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    if(this.id){
      this.blogService.getBlogById(this.id).subscribe(data => {
        this.blogs =data;
        this.url= this.blogs.thumb.pathUrl;
      });
    }
    this.ckeConfig={
      extraPlugins: 'uploadimage, justify, colorbutton, colordialog, iframe, font',
      uploadUrl: 'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
      height: 330,
      filebrowserUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

    }
  }

  onSubmit(){
    if(this.id){
      this.addDataFormData(this.id);
    } else{
      this.saveBlog();
    }
  }

prepareFormData(blogs: Blog): FormData{
  const formData = new FormData();
  formData.append('blogs',
  new Blob([JSON.stringify(blogs)],{type:'application/json'} ));

  for (let i=0 ; i < this.fileToUpload.length; i++ ){
    formData.append(
      'imageFile', this.fileToUpload[i]
    )
  }
  return formData;
}

addDataFormData(id:any){
  const blogFormData = this.prepareFormData(this.blogs);
  this.blogService.updateBlog(id, blogFormData).subscribe(data =>{
    this.gotoblolist();
  })
}

saveBlog(){
  const blogsFormData = this.prepareFormData(this.blogs);
 this.blogService.createBlogs(blogsFormData).subscribe(data =>{
  this.gotoblolist();
 },
  error => console.log(error)
 )
} 

gotoblolist(){
  this.router.navigate(['/admin/blogs'])
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

  protected readonly Blog = Blog;

  public Editor = ClassicEditorBuild;

}
