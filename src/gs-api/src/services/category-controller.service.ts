/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';

/**
 * Category Controller
 */
@Injectable({
  providedIn: 'root',
})
class CategoryControllerService extends __BaseService {
  static readonly findAllUsingGET1Path = '/gestiondesstock/v1/categories/all';
  static readonly saveUsingPOST1Path = '/gestiondesstock/v1/categories/create';
  static readonly deleteUsingDELETE1Path = '/gestiondesstock/v1/categories/delete/{idCategory}';
  static readonly findByCodeUsingGETPath = '/gestiondesstock/v1/categories/{codeCategory}';
  static readonly findByIdUsingGET1Path = '/gestiondesstock/v1categories/{idCategory}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des categories
   *
   * Cette methode permet de charcher et renvoyer la liste des categories qui existant dans la BDD
   * @return La liste des categories / une liste vide
   */
  findAllUsingGET1Response(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des categories
   *
   * Cette methode permet de charcher et renvoyer la liste des categories qui existant dans la BDD
   * @return La liste des categories / une liste vide
   */
  findAllUsingGET1(): __Observable<Array<CategoryDto>> {
    return this.findAllUsingGET1Response().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * Enregistrer une categorie
   *
   * Cette methode d'enregistrer ou modificer une categorie
   * @param dto dto
   * @return l'objet category cree / modifie
   */
  saveUsingPOST1Response(dto: CategoryDto): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondesstock/v1/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Enregistrer une categorie
   *
   * Cette methode d'enregistrer ou modificer une categorie
   * @param dto dto
   * @return l'objet category cree / modifie
   */
  saveUsingPOST1(dto: CategoryDto): __Observable<CategoryDto> {
    return this.saveUsingPOST1Response(dto).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Supprimer une categorie
   *
   * Cette methode permet de supprimer une categorie par ID
   * @param idCategory idCategory
   */
  deleteUsingDELETE1Response(idCategory: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondesstock/v1/categories/delete/${encodeURIComponent(String(idCategory))}`,
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
   * Supprimer une categorie
   *
   * Cette methode permet de supprimer une categorie par ID
   * @param idCategory idCategory
   */
  deleteUsingDELETE1(idCategory: number): __Observable<null> {
    return this.deleteUsingDELETE1Response(idCategory).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher un e categorie par Code
   *
   * Cette methode permet de recherhcer une categprie par son Code
   * @param codeCategory codeCategory
   * @return la gategorie a ete trouve dans la BDD
   */
  findByCodeUsingGETResponse(codeCategory: string): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/categories/${encodeURIComponent(String(codeCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Rechercher un e categorie par Code
   *
   * Cette methode permet de recherhcer une categprie par son Code
   * @param codeCategory codeCategory
   * @return la gategorie a ete trouve dans la BDD
   */
  findByCodeUsingGET(codeCategory: string): __Observable<CategoryDto> {
    return this.findByCodeUsingGETResponse(codeCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Rechercher une categorie par Id
   *
   * Cette methode permet de recherhcer une categorie par son Id
   * @param idCategory idCategory
   * @return la gategorie a ete trouve dans la BDD
   */
  findByIdUsingGET1Response(idCategory: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1categories/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Rechercher une categorie par Id
   *
   * Cette methode permet de recherhcer une categorie par son Id
   * @param idCategory idCategory
   * @return la gategorie a ete trouve dans la BDD
   */
  findByIdUsingGET1(idCategory: number): __Observable<CategoryDto> {
    return this.findByIdUsingGET1Response(idCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }
}

module CategoryControllerService {
}

export { CategoryControllerService }
