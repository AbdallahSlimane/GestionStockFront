import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CltfrsService } from 'src/app/services/cltfrs/cltfrs.service';
import { AdresseDto, ClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {

  origin = "";
  clientFournisseur : ClientDto ={}
  adresseDto : AdresseDto ={}
  errorMsg : Array<string> = []

  constructor(
    private router:Router,
    private activatedroute : ActivatedRoute,
    private cltFrsService : CltfrsService   
  ) { }

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data =>{
      this.origin=data['origin'];
    })
  }

  cancelClick(): void{
    if(this.origin=="client"){
      this.router.navigate(["clients"]);
    }else if (this.origin=="fournisseur"){
      this.router.navigate(["fournisseurs"]);
    }
  }
  enregistrer(){
    if(this.origin == 'client'){
      this.cltFrsService.enregistrerClient(this.mapToClient())
      .subscribe(client => {
        this.router.navigate(["clients"]);
      },error =>{
        this.errorMsg = error.error.errors;
      })
    }else if (this.origin == 'fournisseur'){

    }
  }

  mapToClient() : ClientDto {
    const clientDto: ClientDto = this.clientFournisseur;
    clientDto.adresse = this.adresseDto;
    return clientDto;
  }
}
