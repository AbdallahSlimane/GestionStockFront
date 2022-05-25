import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationRequest, AuthenticationResponse, UtilisateurDto } from 'src/gs-api/src/models';
import { AuthenticationControllerService, UtilisateurControllerService } from 'src/gs-api/src/services';
import { StrictHttpResponse } from "src/gs-api/src/strict-http-response";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( 
      private authenticationService : AuthenticationControllerService ,
      private router:Router,
      private utilisateurService : UtilisateurControllerService
      ) { }


  login(authenticationRequest:AuthenticationRequest):Observable<AuthenticationResponse> {
    return this.authenticationService.authenticateUsingPOST(authenticationRequest);   
  }

  getUserByEmail(email? : string): Observable<UtilisateurDto>{
    if (email != undefined) {
      return this.utilisateurService.findByEmailUsingGET(email);
    }

    return of();
  }

  setAccessToken(authenticatcationResponse:AuthenticationResponse):void{
    localStorage.setItem("accessToken",JSON.stringify(authenticatcationResponse));
  }

 /* setConnectedUser(authenticatcationResponse : AuthenticationResponse) : void{
    localStorage.setItem('accessToken',JSON.stringify(authenticatcationResponse))
  }*/

  setConnectedUser(utilisateur : UtilisateurDto) : void{
    localStorage.setItem('connectedUser' , JSON.stringify(utilisateur))
  }

  setTest(test : String){
    localStorage.setItem("test",test as string);
  }

  getConnectedUser() : UtilisateurDto{
    
      return JSON.parse(localStorage.getItem('connectedUser') as string);
    

  }

  //TODO
  isUserLoggedAndAccessTokenValid():boolean{
    if(localStorage.getItem("accessToken")){
      //TODO if faut verifier si le access token est valid
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
