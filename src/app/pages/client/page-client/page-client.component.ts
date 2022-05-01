import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

  constructor(private activatedroute : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
  }

  nouveauClient(): void{
    this.router.navigate(['nouveauclient']);
  }
}
