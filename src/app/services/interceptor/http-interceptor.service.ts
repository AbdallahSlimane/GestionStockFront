import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from 'src/gs-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    let authenticationResponse : AuthenticationResponse={};

    if(localStorage.getItem('accessToken')){
      authenticationResponse = JSON.parse(
        localStorage.getItem("accessToken") as string
      );
   

    const authRep = req.clone({
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        Authorization : 'Bearer '+authenticationResponse.accessToken
      })
    });
    return next.handle(authRep);
  }
    return next.handle(req);
  }

  
}
