import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { UserService } from 'src/app/services/user/user.service';
import { AdresseDto, AuthenticationRequest, EntrepriseDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  entrepriseDto : EntrepriseDto = {};
  adresse:AdresseDto={};
  errorMsg: Array<string> = [];


  constructor(
              private entrepriseService:EntrepriseService, 
              private userService:UserService,
              private router:Router
              ){ }

  ngOnInit(): void {
  }

  inscrire():void{
    this.entrepriseDto.adresse=this.adresse;
    this.entrepriseService.sincrire(this.entrepriseDto)
    .subscribe(entrepriseDto=>{
      //TODO
      this.connectEntreprise();   
    },error =>{
      this.errorMsg = error.error.errors;
    });
  }

  connectEntreprise():void{
    const authenticationRequest:AuthenticationRequest={
      login:this.entrepriseDto.email,
      password:'som3R@nd0mP@$$word'
    }
    this.userService.login(authenticationRequest)
    .subscribe(response =>{
      this.userService.setConnecteduser(response);
      localStorage.setItem("origin","inscription");
      this.router.navigate(['changermotdepasse']);
    });

  }

}
