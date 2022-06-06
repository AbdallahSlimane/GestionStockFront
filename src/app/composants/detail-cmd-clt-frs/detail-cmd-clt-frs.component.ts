import { Component , Input, OnInit } from '@angular/core';
import { CmdcltfrsService } from 'src/app/services/cmdcltfrs/cmdcltfrs.service';
import { ClientDto, CommandeClientDto, LigneCommandeClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrls: ['./detail-cmd-clt-frs.component.scss']
})
export class DetailCmdCltFrsComponent implements OnInit {

 @Input()
 origin =''
 
 @Input()
 commande: CommandeClientDto = {}

 cltFrs: ClientDto = {}


  constructor(
    private cmdCltFrsService : CmdcltfrsService
  ) { }

  ngOnInit(): void {
    this.extractClientFournisseur()
  }

  extractClientFournisseur(){
    if(this.origin == 'client'){
      this.cltFrs = this.commande.client! 
    }else if (this.origin == 'fournisseur'){

    }
  }
 
}
