import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResponse } from 'src/gs-api/src/models/authentication-response';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  ancienMotDePasse = '';

  constructor(private router:Router) { }
  
   authenticationResponse : AuthenticationResponse={};

  ngOnInit(): void {
   if( localStorage.getItem('oringin') && localStorage.getItem('oringin')=='inscription'){
     this.ancienMotDePasse = "som3R@nd0mP@$$word";
   }
  }

  cancel():void{
    this.router.navigate(["profil"]);
  }

  changerMotDePasseUtilisateur(){
    
  }
}
