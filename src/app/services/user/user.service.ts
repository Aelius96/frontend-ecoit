import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../core/model/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL =`http://localhost:8080/api/users`
  constructor(private http:HttpClient) { }

  public findAll():Observable<User[]>{
    return this.http.get<User[]>(this.baseURL);
  }
}
