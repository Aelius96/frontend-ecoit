import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../core/model/user/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL =`http://localhost:8080/api/v1/auth`
  constructor(private httpclient: HttpClient) { }
  login(user: User): Observable<User> {
    return this.httpclient.post<User>(`${this.baseURL}/login`, user);
  }

  register(user: User): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}/register`, user);
  }
}
