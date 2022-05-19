/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FournisseurDto } from '../models/fournisseur-dto';

/**
 * Fournisseur Controller
 */
@Injectable({
  providedIn: 'root',
})
class FournisseurControllerService extends __BaseService {
  static readonly findAllUsingGET6Path = '/gestiondesstock/v1/fournisseurs/all';
  static readonly saveUsingPOST6Path = '/gestiondesstock/v1/fournisseurs/create';
  static readonly deleteUsingDELETE6Path = '/gestiondesstock/v1/fournisseurs/delete/{idFurnisseur}';
  static readonly findByIdUsingGET6Path = '/gestiondesstock/v1/fournisseurs/{idFurnisseur}';

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
  findAllUsingGET6Response(): __Observable<__StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/fournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET6(): __Observable<Array<FournisseurDto>> {
    return this.findAllUsingGET6Response().pipe(
      __map(_r => _r.body as Array<FournisseurDto>)
    );
  }

  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST6Response(dto: FournisseurDto): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondesstock/v1/fournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST6(dto: FournisseurDto): __Observable<FournisseurDto> {
    return this.saveUsingPOST6Response(dto).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * delete
   * @param idFurnisseur idFurnisseur
   */
  deleteUsingDELETE6Response(idFurnisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondesstock/v1/fournisseurs/delete/${encodeURIComponent(String(idFurnisseur))}`,
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
   * @param idFurnisseur idFurnisseur
   */
  deleteUsingDELETE6(idFurnisseur: number): __Observable<null> {
    return this.deleteUsingDELETE6Response(idFurnisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findById
   * @param idFurnisseur idFurnisseur
   * @return OK
   */
  findByIdUsingGET6Response(idFurnisseur: number): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/fournisseurs/${encodeURIComponent(String(idFurnisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * findById
   * @param idFurnisseur idFurnisseur
   * @return OK
   */
  findByIdUsingGET6(idFurnisseur: number): __Observable<FournisseurDto> {
    return this.findByIdUsingGET6Response(idFurnisseur).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }
}

module FournisseurControllerService {
}

export { FournisseurControllerService }
