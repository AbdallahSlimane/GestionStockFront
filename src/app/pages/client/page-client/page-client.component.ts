import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CltfrsService } from 'src/app/services/cltfrs/cltfrs.service';
import { ClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

  listClient : Array<ClientDto> = []

  constructor(
    private cltFrsService : CltfrsService ,
     private router : Router,
     ) { }

  ngOnInit(): void {
    this.findAllClient()
  }

  findAllClient(){
    this.cltFrsService.findAllClients()
    .subscribe(client => {
      this.listClient = client;
    } )
  }

  nouveauClient(): void{
    this.router.navigate(['nouveauclient']);
  }
}
