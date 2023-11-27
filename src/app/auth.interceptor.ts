import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiService: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = localStorage.getItem("id_token");
    if(TOKEN){
      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${TOKEN}`
        }
    });
      return next.handle(request);
    }
    else{
      return next.handle(request);
    }
  }
}
