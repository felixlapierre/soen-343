import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cleaner } from '../models/cleaner';

@Injectable({
  providedIn: 'root'
})
export class CleanerHttpClientService {

  configUrl = 'http://localhost:8080/cleaner';
  constructor(private http: HttpClient) { }

  getCleaners() {
    return this.http.get<Array<Cleaner>>(`${this.configUrl}/all`);
  }
  getCleaner(id: string) {
    return this.http.get<Cleaner>(this.configUrl, { params: new HttpParams().set('id', id)
  });
  }
}
