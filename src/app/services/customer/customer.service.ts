import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {Customer} from "../../core/model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl =`${Constant.BASE_URL}`;
  constructor(private http:HttpClient) {}

  public getAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}/customer`)
  }

  public addCustomer(formData: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/customer/add`,formData);
  }

  updateCustomer(id: number, formData: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/customer/update/${id}`,formData);
  }

  deleteCustomer(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/customer/delete/${id}`);
  }
  getCusById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/customer/${id}`);
  }

}
