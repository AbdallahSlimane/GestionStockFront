import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { ArticleDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {

  origin="";
  ListArticle : Array<ArticleDto> = []

  constructor(
    private activatedRoute:ActivatedRoute,
    private articleService : ArticleService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin=data['origin'];
    })

    this.findAllArticle()
  }

  findAllArticle(){
    this.articleService.findAllArticle()
    .subscribe(articles =>{
      this.ListArticle=articles
    })
  }


}
