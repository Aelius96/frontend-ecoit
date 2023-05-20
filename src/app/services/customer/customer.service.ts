import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl =`http://localhost:4200/`;
  constructor(private httpClient:HttpClient) { }


}
