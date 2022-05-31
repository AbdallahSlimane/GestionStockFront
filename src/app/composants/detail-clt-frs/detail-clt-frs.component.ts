import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CltfrsService } from 'src/app/services/cltfrs/cltfrs.service';
import { ClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.scss']
})
export class DetailCltFrsComponent implements OnInit {

  @Input()
  origin: String =''

  @Input()
  clientFournisseur : ClientDto = {}

  @Output()
  suppressionResult = new EventEmitter

  constructor(
    private router : Router,
    private cltFrsService : CltfrsService
    ) { }

  ngOnInit(): void {
  }

  modifierClientFournisseur(){
    if(this.origin == 'client'){
      this.router.navigate(['nouveauclient',this.clientFournisseur.id])
    }else if (this.origin =='fournisseur'){

    }
  }

  confirmerEtSupprimer(){
    if(this.origin == 'client'){
      this.cltFrsService.deleteClient(this.clientFournisseur.id!)
      .subscribe(res=>{
        this.suppressionResult.emit('success')
      }, error =>{
        this.suppressionResult.emit(error.error.message)
      })
    }else if (this.origin =='fournisseur'){

    }
  }
}
