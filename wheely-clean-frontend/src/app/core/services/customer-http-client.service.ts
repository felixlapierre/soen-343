import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Customer } from '../models/customer';
import { WashRequest } from '../models/wash-request';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpClientService {

  configUrl = 'http://localhost:8080/customer';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<Array<Customer>>(`${this.configUrl}/all`);
  }
  getCustomer(id: string) {
    return this.http.get<Customer>(this.configUrl, {
      params: new HttpParams().set('id', id)
    });
  }
  getCustomerRequests(id: string) {
    return this.http.get<Array<WashRequest>>(`${this.configUrl}/requests`, {
      params: new HttpParams().set('id', id)
    });
  }
}
