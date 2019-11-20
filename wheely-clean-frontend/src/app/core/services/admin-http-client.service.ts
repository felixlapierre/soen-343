import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cleaner } from 'src/app/core/models/cleaner';


@Injectable({
  providedIn: 'root'
})
export class AdminHttpClientService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   }),
  //   mode: 'no-cors'
  // };
  configUrl = 'http://localhost:8080/cleaner';
  data: any;
  constructor(private http: HttpClient) { }

  getCleaners() {
    return this.http.get<Array<Cleaner>>(`${this.configUrl}/all`);
  }
  getCleaner(id: string) {
    return this.http.get<Cleaner>(this.configUrl, { params: new HttpParams().set('id', id)
  });
  }

}
