import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {News} from "../../core/model/news/news";
import {Obj} from "@popperjs/core";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {
  }

  public listAll(): Observable<News[]>{
    return this.http.get<News[]>(`${this.baseUrl}/news`);
  }

  public addNews(news: News): Observable<Object>{
    return this.http.post<News>(`${this.baseUrl}/news/add`,news);
  }

  createNews(news: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/news/add`, news);
  }

  public getNewsById(id: number): Observable<News>{
    return this.http.get<News>(`${this.baseUrl}/news/${id}`);
  }

  updateNews(id: number, news: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/news/edit/${id}`,news);
  }

  deleteNews(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/news/delete/${id}`);
  }
}
