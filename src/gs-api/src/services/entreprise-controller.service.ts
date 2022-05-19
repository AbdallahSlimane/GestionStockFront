/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntrepriseDto } from '../models/entreprise-dto';

/**
 * Entreprise Controller
 */
@Injectable({
  providedIn: 'root',
})
class EntrepriseControllerService extends __BaseService {
  static readonly findAllUsingGET5Path = '/gestiondesstock/v1/entreprises/all';
  static readonly saveUsingPOST5Path = '/gestiondesstock/v1/entreprises/create';
  static readonly deleteUsingDELETE5Path = '/gestiondesstock/v1/entreprises/delete/{idEntreprise}';
  static readonly findByIdUsingGET5Path = '/gestiondesstock/v1/entreprises/{idEntreprise}';

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
  findAllUsingGET5Response(): __Observable<__StrictHttpResponse<Array<EntrepriseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/entreprises/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET5(): __Observable<Array<EntrepriseDto>> {
    return this.findAllUsingGET5Response().pipe(
      __map(_r => _r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST5Response(dto: EntrepriseDto): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondesstock/v1/entreprises/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST5(dto: EntrepriseDto): __Observable<EntrepriseDto> {
    return this.saveUsingPOST5Response(dto).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * delete
   * @param idEntreprise idEntreprise
   */
  deleteUsingDELETE5Response(idEntreprise: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondesstock/v1/entreprises/delete/${encodeURIComponent(String(idEntreprise))}`,
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
   * @param idEntreprise idEntreprise
   */
  deleteUsingDELETE5(idEntreprise: number): __Observable<null> {
    return this.deleteUsingDELETE5Response(idEntreprise).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findById
   * @param idEntreprise idEntreprise
   * @return OK
   */
  findByIdUsingGET5Response(idEntreprise: number): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/entreprises/${encodeURIComponent(String(idEntreprise))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * findById
   * @param idEntreprise idEntreprise
   * @return OK
   */
  findByIdUsingGET5(idEntreprise: number): __Observable<EntrepriseDto> {
    return this.findByIdUsingGET5Response(idEntreprise).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }
}

module EntrepriseControllerService {
}

export { EntrepriseControllerService }
