import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WashRequest } from '../models/wash-request';

@Injectable({
  providedIn: 'root'
})
export class RequestHttpClientService {

  configUrl = 'http://localhost:8080/request';

  constructor(private http: HttpClient) { }

  createRequest(request: WashRequest){
    return this.http.post(this.configUrl, request);
  }
  getRequests(){
    return this.http.get<Array<WashRequest>>(`${this.configUrl}/all`);
  }
  getRequest(id: string){
    return this.http.get<WashRequest>(this.configUrl, {
        params: new HttpParams().set('id', id)
    });
  }
  updateRequest(request: WashRequest){
    return this.http.put(this.configUrl, request);
  }

}
