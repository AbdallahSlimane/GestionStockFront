import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { CltfrsService } from 'src/app/services/cltfrs/cltfrs.service';
import { ArticleDto, ClientDto, CommandeClientDto, LigneCommandeClientDto } from 'src/gs-api/src/models';
import { CommandeClientControllerService } from 'src/gs-api/src/services';

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
  listArticle: Array<ArticleDto> = []
  articleNotYetSelected = false

  lignesCommande : Array<LigneCommandeClientDto> = []
  errorMsg: Array<string> = [];
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private cltFrsService : CltfrsService,
    private articleService : ArticleService,
    private commandeClientService : CommandeClientControllerService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin=data['origin'];
    })
    this.findAll()
    this.findAllArticle()
    console.log(this.selectedClientFournisseur)

  }

  findAll(){
    if (this.origin == 'client'){
      this.cltFrsService.findAllClients()
      .subscribe(client=>{
        this.ListClientFournisseurs=client
      })
    }
  }

  findAllArticle(){
    this.articleService.findAllArticle()
    .subscribe(articles =>{
      this.listArticle = articles
    })
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
    if(this.codeArticle.length == 0)
    {
      this.findAllArticle()
    }

    this.listArticle = this.listArticle
      .filter(art => art.codeArticle?.startsWith(this.codeArticle) ||art.designation?.startsWith(this.codeArticle) )

  }
  
  ajouterLigneCommande(){
    const ligneCmdAlreadyExists = this.lignesCommande.find(lig => lig.article?.codeArticle === this.searchedArticle.codeArticle)
    if(ligneCmdAlreadyExists){
      this.lignesCommande.forEach(lig=>{
        if(lig.article?.codeArticle === this.searchedArticle.codeArticle){
          // @ts-ignore
          lig.quantite = +lig.quantite + +this.quantite
          this.totalCommande = this.totalCommande + lig.prixUnitaire! * +this.quantite
        }
      })
    

    }else{
      const ligneCmd: LigneCommandeClientDto={
        article : this.searchedArticle,
        prixUnitaire: this.searchedArticle.prixUnitaireTtc,
        quantite: +this.quantite
      };
      this.totalCommande = this.totalCommande + ligneCmd.prixUnitaire! * ligneCmd.quantite!
      this.lignesCommande.push(ligneCmd)
    }
      
    this.searchedArticle = {}
    this.quantite = ''
    this.codeArticle = ''
    this.articleNotYetSelected=false;

  }

  selectArticle(article : ArticleDto){
    this.searchedArticle = article;
    this.codeArticle = article.codeArticle!;
    this.articleNotYetSelected=true;
  }

  enregistrerCommande(){
    const commandeClient : CommandeClientDto ={
      client: this.selectedClientFournisseur,
      code:'code',
      etatCommmande : "EN_PREPARATION",
      idEntreprise : 12
    }
    console.log(this.selectedClientFournisseur)

    this.commandeClientService.saveUsingPOST3(commandeClient)
    .subscribe(cmd=>{
      this.router.navigate(['commandesclient'])
    }, error =>{
      this.errorMsg = error.error.errors
    })
  }

}
