import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CmdcltfrsService } from 'src/app/services/cmdcltfrs/cmdcltfrs.service';
import { CommandeClientDto, LigneCommandeClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent implements OnInit {

  origin="";
  listeCommandes: Array<CommandeClientDto> = []
  lignesCommande: Array<LigneCommandeClientDto> = []

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private cmdCltFrsService : CmdcltfrsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin=data['origin'];
    })

    this.findAllCommandes()
  }

  nouvelleCommande(): void{
    if(this.origin=='client'){
      this.router.navigate(['nouvellecommandeclt']);
    }else if (this.origin=='fournisseur'){
      this.router.navigate(['nouvellecommandefrs']);
    }
  }

  findAllCommandes(){
    if(this.origin=='client'){
      this.cmdCltFrsService.findAllCommandeClient()
      .subscribe(cmd=>{
        this.listeCommandes = cmd
      })
    }else if (this.origin=='fournisseur'){
    }
  }

  findAllLigneCommande(idCommande? : number){
    if(this.origin == 'client'){
        this.cmdCltFrsService.findAllLigneCommandeClient(idCommande)
        .subscribe(list =>{
          this.lignesCommande = list
        })
        console.log(this.lignesCommande.length)
      }else if (this.origin == 'fournisseur'){
  
      }
    }

}
