import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Constant } from "src/app/core/config/constant";
import { Blog } from "src/app/core/model/blog/blog";


@Injectable({
    providedIn: 'root'
  })
export class BlogService{

    
    private baseUrl = `${Constant.BASE_URL}`;
    constructor(private http: HttpClient ){
    }

    public listAll(): Observable<Blog[]>{
      return this.http.get<Blog[]>(`${this.baseUrl}/blogs`)
    }

    public addBlog(blogs: Blog): Observable<Object>{
      return this.http.post<Blog>(`${this.baseUrl}/blogs/new`, blogs)
    }


    public getBlogById(id: number): Observable<Blog>{
      return this.http.get<Blog>(`${this.baseUrl}/blogs/${id}`);
    }
    createBlogs(blogs: FormData):Observable<Object>{
      return this.http.post(`${this.baseUrl}/blogs/new`, blogs)

    }

    updateBlog(id: number, blogs: FormData):Observable<Object>{
      return this.http.post(`${this.baseUrl}/blogs/update/${id}`,blogs);
    }
  
    deleteBlog(id: number): Observable<Object>{
      return this.http.get(`${this.baseUrl}/blogs/delete/${id}`);
    }
}