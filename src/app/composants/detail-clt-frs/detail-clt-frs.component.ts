import { Component, Input, OnInit } from '@angular/core';
import { ClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.scss']
})
export class DetailCltFrsComponent implements OnInit {

  @Input()
  clientFournisseur : ClientDto = {}

  constructor() { }

  ngOnInit(): void {
  }

}
