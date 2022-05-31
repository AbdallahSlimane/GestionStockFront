import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoaderService } from 'src/app/composants/loader/service/loader.service';
import { AuthenticationResponse } from 'src/gs-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(
    private loaderService : LoaderService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    this.loaderService.show()

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
    return this.handleRequest(authRep , next)
  }
  return this.handleRequest(req , next)
}

  handleRequest(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    return next.handle(req)
    .pipe(tap((event: HttpEvent<any>) =>{
      if(event instanceof HttpResponse){
        this.loaderService.hide()
      }
    },(err: any)=>{
      this.loaderService.hide()
    }))
  }

  
}
