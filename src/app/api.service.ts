import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseurl: string = 'https://dev.flavumhealth.com/api/v1/';
  constructor(private http: HttpClient) { }

  allDoctors(): Observable<any> {
    return this.http.get(this.baseurl + 'doctors/');
  }
}
