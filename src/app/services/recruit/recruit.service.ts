import { Injectable} from "@angular/core";
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Domain} from "../../core/domain/domain";
import { Recruit } from "src/app/core/model/recuit/recuit";

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
  constructor(private http: HttpClient){}
  private baseUrl = `${Constant.BASE_URL}`;
  public listAll(): Observable<Recruit[]>{
    return this.http.get<Recruit[]>(`${this.baseUrl}/recruit`);

  }
  public addRecruit(recruit : Recruit): Observable<Object>{
    return this.http.post<Recruit>(`${this.baseUrl}/recruit/add` , recruit);
  }

  createRecruit( recruit: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/recruit/add` , recruit);

  }
  public getRecruitId(id: number): Observable<Recruit>{
    return this.http.get<Recruit>(`${this.baseUrl}/recruit/${id}`);
  }
  updateRecruit(id: number, recruit: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/recruit/update/${id}`,recruit);
  }

  deleteRecruit(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/recruit/update/${id}`);
  }
}
