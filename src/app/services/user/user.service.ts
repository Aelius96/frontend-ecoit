import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../core/model/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl =`http://localhost:8080/api/v1/user`
  constructor(private httpclient:HttpClient) { }

  public findAll():Observable<User[]>{
    return this.httpclient.get<User[]>(`${this.baseUrl}/all`);
  }

  public getUserById(id:number):Observable<User>{
    return this.httpclient.get<User>(`${this.baseUrl}/${id}`);
  }
  public deleteUser(id: number): Observable<void> {
    return this.httpclient.get<void>(`${this.baseUrl}/delete/${id}`);
  }

}
