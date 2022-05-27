import { Component, Input, OnInit } from '@angular/core';
import { ArticleDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  @Input()
  articleDto : ArticleDto = {};

  constructor() { }

  ngOnInit(): void {
  }

}
