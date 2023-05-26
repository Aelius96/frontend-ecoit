import { Injectable} from "@angular/core";
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Domain} from "../../core/domain/domain";

@Injectable({
  providedIn: 'root'
})
export class RecruitService{
  // private domain=`${Domain.RECRUIT}`
  // private baseURL = `${Constant.BASE_URL}`;
  // constructor(private httpClient: HttpClient) {
  // }


  // getById(id:number): Observable<any>{
  //   return this.httpClient.get(`${this.baseURL}/${this.domain}/d/${id}`)
  // }
}
