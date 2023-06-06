import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypicalCustomer } from 'src/app/modules/typical/customer/typical-customer';
import { Constant } from "src/app/core/config/constant";

@Injectable({
    providedIn: 'root'
  })
export class TypicalCustomerService{
    private baseUrl =`${Constant.BASE_URL}`;

    constructor(private http: HttpClient  ){}

    public listAll():Observable<TypicalCustomer[]>{
        return this.http.get<TypicalCustomer[]>(`${this.baseUrl}`)
    }

    public addtycus(typicalcus: TypicalCustomer):Observable<Object>{
        return this.http.post<TypicalCustomer>(`${this.baseUrl}/customer-typical/add` , typicalcus)
    }
    createtycus(typicalcustomer: FormData): Observable<Object>{
        return this.http.post(`${this.baseUrl}/customer-typical/add`, typicalcustomer);
      }
    
    updatetycus(id: number, typicalcus: FormData):Observable<Object>{
        return this.http.post(`${this.baseUrl}/customer-typical/update/${id}`,typicalcus);
      }
    public getTypicalcusById(id: number): Observable<TypicalCustomer>{
        return this.http.get<TypicalCustomer>(`${this.baseUrl}/news/${id}`);
      }
    

}