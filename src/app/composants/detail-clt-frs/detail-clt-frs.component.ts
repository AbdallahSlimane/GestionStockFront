import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  modifierClientFournisseur(){
    if(this.origin == 'client'){
      this.router.navigate(['nouveauclient',this.clientFournisseur.id])
    }else if (this.origin =='fournisseur'){

    }
  }

}
