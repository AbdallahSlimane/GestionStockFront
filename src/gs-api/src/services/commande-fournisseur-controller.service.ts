/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';

/**
 * Commande Fournisseur Controller
 */
@Injectable({
  providedIn: 'root',
})
class CommandeFournisseurControllerService extends __BaseService {
  static readonly findByIdUsingGET4Path = '/gestiondesstock/v1/commandefournisseur/{idCommandeFournisseur}';
  static readonly findAllUsingGET4Path = '/gestiondesstock/v1/commandefournisseurs/all';
  static readonly saveUsingPOST4Path = '/gestiondesstock/v1/commandefournisseurs/create';
  static readonly findByCodeArticleUsingGET1Path = '/gestiondesstock/v1/commandefournisseurs/{codeCommandeFournisseur}';
  static readonly deleteUsingDELETE4Path = '/gestiondesstock/v1/commandefournisseurs/{idCommandeFournisseur}")';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findById
   * @param idCommandeFournisseur idCommandeFournisseur
   * @return OK
   */
  findByIdUsingGET4Response(idCommandeFournisseur: number): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/commandefournisseur/${encodeURIComponent(String(idCommandeFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * findById
   * @param idCommandeFournisseur idCommandeFournisseur
   * @return OK
   */
  findByIdUsingGET4(idCommandeFournisseur: number): __Observable<CommandeFournisseurDto> {
    return this.findByIdUsingGET4Response(idCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGET4Response(): __Observable<__StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/commandefournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET4(): __Observable<Array<CommandeFournisseurDto>> {
    return this.findAllUsingGET4Response().pipe(
      __map(_r => _r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST4Response(dto: CommandeFournisseurDto): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondesstock/v1/commandefournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST4(dto: CommandeFournisseurDto): __Observable<CommandeFournisseurDto> {
    return this.saveUsingPOST4Response(dto).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * findByCodeArticle
   * @param codeCommandeFournisseur codeCommandeFournisseur
   * @return OK
   */
  findByCodeArticleUsingGET1Response(codeCommandeFournisseur: string): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/commandefournisseurs/${encodeURIComponent(String(codeCommandeFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * findByCodeArticle
   * @param codeCommandeFournisseur codeCommandeFournisseur
   * @return OK
   */
  findByCodeArticleUsingGET1(codeCommandeFournisseur: string): __Observable<CommandeFournisseurDto> {
    return this.findByCodeArticleUsingGET1Response(codeCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * delete
   * @param idCommandeFournisseur idCommandeFournisseur
   */
  deleteUsingDELETE4Response(idCommandeFournisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondesstock/v1/commandefournisseurs/${encodeURIComponent(String(idCommandeFournisseur))}")`,
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
   * delete
   * @param idCommandeFournisseur idCommandeFournisseur
   */
  deleteUsingDELETE4(idCommandeFournisseur: number): __Observable<null> {
    return this.deleteUsingDELETE4Response(idCommandeFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CommandeFournisseurControllerService {
}

export { CommandeFournisseurControllerService }
