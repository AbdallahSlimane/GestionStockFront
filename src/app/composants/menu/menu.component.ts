import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties : Array<Menu> =[
  /* Tableau de bord */
  {
    heading: "headingOne",
    id: '1',
    titre: 'Tableau de bord',
    icon: 'bi bi-graph-up-arrow',
    url: '',
    sousMenu:[
      {
        id: "11",
        titre: 'Vue d\"ensemble',
        icon: 'bi bi-pie-chart',
        url: ''
      },
      {
        id: "12",
        titre: 'Statistisques',
        icon: 'bi bi-bar-chart-line',
        url: 'statistiques'
      }
    ]
  },
  
  /* Article */
  {
    heading: "headingTwo",
    id: '2',
    titre: 'Articles',
    icon: 'bi bi-boxes',
    url: '',
    sousMenu:[
      {
        id: "21",
        titre: 'Articles',
        icon: 'bi bi-boxes',
        url: 'articles'
      },
      {
        id: "22",
        titre: 'Mouvements du stock',
        icon: 'bi bi-stack-overflow',
        url: 'mvtstk'
      }
    ]
  },

  /* Clients */
  {
    heading:"headingThree",
    id: '32',
    titre: 'Clients',
    icon: 'bi bi-people',
    url: '',
    sousMenu:[
      {
        id: "31",
        titre: 'Clients',
        icon: 'bi bi-people',
        url: 'clients'
      },
      {
        id: "32",
        titre: 'Commande clients',
        icon: 'bi bi-basket',
        url: 'commandeclient'
      }
    ]
  },

  /* Fournisseur */
  {
    heading:"headingfour",
    id: '4',
    titre: 'Fournisseurs',
    icon: 'bi bi-person-circle',
    url: '',
    sousMenu:[
      {
        id: "41",
        titre: 'Fournisseurs',
        icon: 'bi bi-person-circle',
        url: 'fournisseurs'
      },
      {
        id: "42",
        titre: 'Commandes Fournisseurs',
        icon: 'bi bi-truck',
        url: 'commandefournisseur'
      }
    ]
  },

  /**Parametrage */
  {
    heading:"headingfive",
    id: '5',
    titre: 'Parametrage',
    icon: 'bi bi-tools',
    url: '',
    sousMenu:[
      {
        id: "51",
        titre: 'Categories',
        icon: 'bi bi-gear',
        url: 'categories'
      },
      {
        id: "52",
        titre: 'utilisateurs',
        icon: 'bi bi-person-rolodex',
        url: 'utilisateurs'
      }
    ]
  }
  /* Fin menu */
  ];

  private lastSelectedMenu: Menu | undefined;
  
  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  navigate(menu : Menu):void{
    if(this.lastSelectedMenu){
      this.lastSelectedMenu.activate=false;
    }

    menu.activate = true;
    this.lastSelectedMenu=menu;
    this.router.navigate([menu.url]);
  }

}
