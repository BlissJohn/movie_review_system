import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject:Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice=this.inject.get(UserService);
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+authservice.GetToken()
      }
    });
    console.log(jwtToken,authservice.GetToken());
    return next.handle(jwtToken);
  }
}