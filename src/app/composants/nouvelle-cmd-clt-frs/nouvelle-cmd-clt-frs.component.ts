import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { CltfrsService } from 'src/app/services/cltfrs/cltfrs.service';
import { ArticleDto, ClientDto, LigneCommandeClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {

  origin="";
  selectedClientFournisseur: ClientDto = {}
  ListClientFournisseurs: Array<ClientDto> = []
  searchedArticle : ArticleDto = {}
  articleErrorMsg= ''
  codeArticle=""
  quantite=""
  totalCommande=0

  lignesCommande : Array<LigneCommandeClientDto> = []
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private cltFrsService : CltfrsService,
    private articleService : ArticleService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin=data['origin'];
    })
    this.findAll()
  }

  findAll(){
    if (this.origin == 'client'){
      this.cltFrsService.findAllClients()
      .subscribe(client=>{
        this.ListClientFournisseurs=client
      })
    }
  }

  findArticleByCode(codeArticle : string){
    this.articleErrorMsg=''
    this.searchedArticle={}
    if (codeArticle){
      this.articleService.findArticleByCode(codeArticle)
      .subscribe(article =>{
        this.searchedArticle = article
      }, error => {
        this.articleErrorMsg = error.error.message
      })
    }
  }

  searchArticle(){
   
    this.findArticleByCode(this.codeArticle)

  }
  
  ajouterLigneCommande(){
    const ligneCmd: LigneCommandeClientDto={
      article : this.searchedArticle,
      prixUnitaire: this.searchedArticle.prixUnitaireTtc,
      quantite: +this.quantite
    };
    this.totalCommande = this.totalCommande + ligneCmd.prixUnitaire! * ligneCmd.quantite!

    this.lignesCommande.push(ligneCmd)
    this.searchedArticle = {}
    this.quantite = ''
    this.codeArticle = ''
  }

}
