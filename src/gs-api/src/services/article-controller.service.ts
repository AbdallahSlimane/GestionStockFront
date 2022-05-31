/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';

/**
 * Article Controller
 */
@Injectable({
  providedIn: 'root',
})
class ArticleControllerService extends __BaseService {
  static readonly saveUsingPOSTPath = '/gestiondesstock/v1/article/create';
  static readonly findAllUsingGETPath = '/gestiondesstock/v1/articles/all';
  static readonly deleteUsingDELETEPath = '/gestiondesstock/v1/articles/delete/{idArticle}';
  static readonly findAllArticleByIdCategoryUsingGETPath = '/gestiondesstock/v1/articles/filter/category/{idCategory}';
  static readonly findHistoriqueCommandeFournisseurUsingGETPath = '/gestiondesstock/v1/articles/hisqtorique/commandefournisseur/{idArticle}';
  static readonly findHistoriqueCommandeClientUsingGETPath = '/gestiondesstock/v1/articles/hisqtorique/commmandeclient/{idArticle}';
  static readonly findHistpriqueVenteUsingGETPath = '/gestiondesstock/v1/articles/hisqtorique/vente/{idArticle}';
  static readonly findByIdUsingGETPath = '/gestiondesstock/v1/articles/id/{idArticle}';
  static readonly findByCodeArticleUsingGETPath = '/gestiondesstock/v1/articles/{codeArticle}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Enregistrer un article
   *
   * Cette methode d'enregistrer ou modificer un article
   * @param dto dto
   * @return l'objet article cree / modifie
   */
  saveUsingPOSTResponse(dto: ArticleDto): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondesstock/v1/article/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Enregistrer un article
   *
   * Cette methode d'enregistrer ou modificer un article
   * @param dto dto
   * @return l'objet article cree / modifie
   */
  saveUsingPOST(dto: ArticleDto): __Observable<ArticleDto> {
    return this.saveUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Renvoi la liste des articles
   *
   * Cette methode permet de charcher et renvoyer la liste des articles qui existant dans la BDD
   * @return La liste des article / une liste vide
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/articles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des articles
   *
   * Cette methode permet de charcher et renvoyer la liste des articles qui existant dans la BDD
   * @return La liste des article / une liste vide
   */
  findAllUsingGET(): __Observable<Array<ArticleDto>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer un article par ID
   * @param idArticle idArticle
   */
  deleteUsingDELETEResponse(idArticle: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondesstock/v1/articles/delete/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un article
   *
   * Cette methode permet de supprimer un article par ID
   * @param idArticle idArticle
   */
  deleteUsingDELETE(idArticle: number): __Observable<null> {
    return this.deleteUsingDELETEResponse(idArticle).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findAllArticleByIdCategory
   * @param idCategory idCategory
   * @return OK
   */
  findAllArticleByIdCategoryUsingGETResponse(idCategory: number): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/articles/filter/category/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * findAllArticleByIdCategory
   * @param idCategory idCategory
   * @return OK
   */
  findAllArticleByIdCategoryUsingGET(idCategory: number): __Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategoryUsingGETResponse(idCategory).pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * findHistoriqueCommandeFournisseur
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueCommandeFournisseurUsingGETResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/articles/hisqtorique/commandefournisseur/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * findHistoriqueCommandeFournisseur
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueCommandeFournisseurUsingGET(idArticle: number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurUsingGETResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * findHistoriqueCommandeClient
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueCommandeClientUsingGETResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/articles/hisqtorique/commmandeclient/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * findHistoriqueCommandeClient
   * @param idArticle idArticle
   * @return OK
   */
  findHistoriqueCommandeClientUsingGET(idArticle: number): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandeClientUsingGETResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * findHistpriqueVente
   * @param idArticle idArticle
   * @return OK
   */
  findHistpriqueVenteUsingGETResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/articles/hisqtorique/vente/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * findHistpriqueVente
   * @param idArticle idArticle
   * @return OK
   */
  findHistpriqueVenteUsingGET(idArticle: number): __Observable<Array<LigneVenteDto>> {
    return this.findHistpriqueVenteUsingGETResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * Rechercher un article par Id
   *
   * Cette methode permet de recherhcer un article par son Id
   * @param idArticle idArticle
   * @return l'article a ete trouve dans la BDD
   */
  findByIdUsingGETResponse(idArticle: number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/articles/id/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Rechercher un article par Id
   *
   * Cette methode permet de recherhcer un article par son Id
   * @param idArticle idArticle
   * @return l'article a ete trouve dans la BDD
   */
  findByIdUsingGET(idArticle: number): __Observable<ArticleDto> {
    return this.findByIdUsingGETResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Rechercher un article par Code
   *
   * Cette methode permet de recherhcer un article par son Code
   * @param codeArticle codeArticle
   * @return l'article a ete trouve dans la BDD
   */
  findByCodeArticleUsingGETResponse(codeArticle: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/articles/${encodeURIComponent(String(codeArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Rechercher un article par Code
   *
   * Cette methode permet de recherhcer un article par son Code
   * @param codeArticle codeArticle
   * @return l'article a ete trouve dans la BDD
   */
  findByCodeArticleUsingGET(codeArticle: string): __Observable<ArticleDto> {
    return this.findByCodeArticleUsingGETResponse(codeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }
}

module ArticleControllerService {
}

export { ArticleControllerService }
