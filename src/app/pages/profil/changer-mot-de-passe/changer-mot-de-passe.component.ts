import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResponse } from 'src/gs-api/src/models/authentication-response';
import { CategoryControllerService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  constructor(private router:Router , private util : CategoryControllerService) { }
  
   authenticationResponse : AuthenticationResponse={};

  ngOnInit(): void {
    this.util.findAllUsingGET1Response()
    .subscribe(res=>{});

    console.log(this.authenticationResponse.accessToken);
   
  }

  cancel():void{
    this.router.navigate(["profil"]);
  }
}
