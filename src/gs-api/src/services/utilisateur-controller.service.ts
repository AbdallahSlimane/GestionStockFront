/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../models/utilisateur-dto';

/**
 * Utilisateur Controller
 */
@Injectable({
  providedIn: 'root',
})
class UtilisateurControllerService extends __BaseService {
  static readonly findAllUsingGET7Path = '/gestiondesstock/v1/utilisateurs/all';
  static readonly saveUsingPOST7Path = '/gestiondesstock/v1/utilisateurs/create';
  static readonly deleteUsingDELETE7Path = '/gestiondesstock/v1/utilisateurs/delete/{idUtilisateur}';
  static readonly findByIdUsingGET7Path = '/gestiondesstock/v1/utilisateurs/{idUtilisateur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGET7Response(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET7(): __Observable<Array<UtilisateurDto>> {
    return this.findAllUsingGET7Response().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST7Response(dto: UtilisateurDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondesstock/v1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST7(dto: UtilisateurDto): __Observable<UtilisateurDto> {
    return this.saveUsingPOST7Response(dto).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * delete
   * @param idUtilisateur idUtilisateur
   */
  deleteUsingDELETE7Response(idUtilisateur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondesstock/v1/utilisateurs/delete/${encodeURIComponent(String(idUtilisateur))}`,
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
   * @param idUtilisateur idUtilisateur
   */
  deleteUsingDELETE7(idUtilisateur: number): __Observable<null> {
    return this.deleteUsingDELETE7Response(idUtilisateur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findById
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findByIdUsingGET7Response(idUtilisateur: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/utilisateurs/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * findById
   * @param idUtilisateur idUtilisateur
   * @return OK
   */
  findByIdUsingGET7(idUtilisateur: number): __Observable<UtilisateurDto> {
    return this.findByIdUsingGET7Response(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }
}

module UtilisateurControllerService {
}

export { UtilisateurControllerService }
