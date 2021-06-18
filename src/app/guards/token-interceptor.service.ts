import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  token = localStorage.getItem('token')
  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,): Observable<HttpEvent<any>> {
    const dupReq = request.clone({
      headers: request.headers.set('Authorization', `bearer ${this.token}`)
    });
    return next.handle(dupReq);
  }
}
