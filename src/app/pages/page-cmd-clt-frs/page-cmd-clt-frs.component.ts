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
  mapLignesCommande = new Map()
  mapPrixTotalCommande = new Map()

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
        this.findAllLigneCommande()
      })
    }else if (this.origin=='fournisseur'){
    }
  }

  findAllLigneCommande(){
    this.listeCommandes.forEach(cmd=>{
      this.findLigneCommande(cmd.id)
    })
  }

  findLigneCommande(idCommande? : number){
    if(this.origin == 'client'){
        this.cmdCltFrsService.findAllLigneCommandeClient(idCommande)
        .subscribe(list =>{
          this.mapLignesCommande.set(idCommande , list)
          this.mapPrixTotalCommande.set(idCommande , this.calculerTotalCmd(list))
        })
        console.log(this.lignesCommande.length)
      }else if (this.origin == 'fournisseur'){
  
      }
    }

    calculerTotalCmd(list : Array<LigneCommandeClientDto>): number{
      let total=0;
      list.forEach(ligne=>{
        if(ligne.quantite && ligne.prixUnitaire){
          total = total + (ligne.quantite * ligne.prixUnitaire)
        }
      })
      return total
    }

    calculerTotalCommande(id?:number): number{
      return this.mapPrixTotalCommande.get(id)
  }

}
