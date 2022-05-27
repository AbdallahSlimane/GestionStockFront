import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  @Input()
  articleDto : ArticleDto = {};

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  modifierArticle(){
    this.router.navigate(['nouvelarticle',this.articleDto.id])
  }
}
