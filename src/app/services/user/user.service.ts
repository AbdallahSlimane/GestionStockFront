import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationRequest, AuthenticationResponse } from 'src/gs-api/src/models';
import { AuthenticationControllerService } from 'src/gs-api/src/services';
import { StrictHttpResponse } from "src/gs-api/src/strict-http-response";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private authenticationService : AuthenticationControllerService ,private router:Router) { }


  login(authenticationRequest:AuthenticationRequest):Observable<AuthenticationResponse> {
    return this.authenticationService.authenticateUsingPOST(authenticationRequest);   
  }

  setConnecteduser(authenticatcationResponse:AuthenticationResponse):void{
    localStorage.setItem("connectedUser",JSON.stringify(authenticatcationResponse));
  }

  //TODO
  isUserLoggedAndAccessTokenValid():boolean{
    if(localStorage.getItem("connectedUser")){
      //TODO if faut verifier si le access token est valid
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
