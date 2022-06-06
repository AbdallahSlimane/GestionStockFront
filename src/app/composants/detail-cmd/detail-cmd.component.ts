import { Component, Input, OnInit } from '@angular/core';
import { CmdcltfrsService } from 'src/app/services/cmdcltfrs/cmdcltfrs.service';
import { LigneCommandeClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-cmd',
  templateUrl: './detail-cmd.component.html',
  styleUrls: ['./detail-cmd.component.scss']
})
export class DetailCmdComponent implements OnInit {
  
  @Input()
  idCommande = -1;

  @Input()
  origin=''

  @Input()
  ligneCommande : LigneCommandeClientDto = {};
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

 

}
