import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArticleDto } from 'src/gs-api/src/models';
import { ArticleControllerService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private userService : UserService,
    private articleService : ArticleControllerService
  ) { }

  enregistrerArticle(articleDto : ArticleDto) : Observable<ArticleDto>{
    articleDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.articleService.saveUsingPOST(articleDto);
  }

  findAllArticle() : Observable<ArticleDto[]>{
    return this.articleService.findAllUsingGET();
  }

  findArticleById(idArticle? : number) : Observable<ArticleDto>{
    if(idArticle){
      return this.articleService.findByIdUsingGET(idArticle);
    }

    return of();
  }

  findArticleByCode(codeArticle : string): Observable<ArticleDto>{
      return this.articleService.findByCodeArticleUsingGET(codeArticle);
  }

  deleteArticle(idArticle : number) : Observable<any>{
    if(idArticle){
      return this.articleService.deleteUsingDELETE(idArticle)
    }

    return of();
  }
}
