/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { VentesDto } from '../models/ventes-dto';

/**
 * Ventes Controller
 */
@Injectable({
  providedIn: 'root',
})
class VentesControllerService extends __BaseService {
  static readonly findAllUsingGET8Path = '/gestiondesstock/v1/ventes/all';
  static readonly saveUsingPOST8Path = '/gestiondesstock/v1/ventes/create';
  static readonly deleteUsingDELETE8Path = '/gestiondesstock/v1/ventes/delete/{idVente}';
  static readonly findByIdUsingGET8Path = '/gestiondesstock/v1/ventes/id/{idVente}';
  static readonly findByCodeUsingGET2Path = '/gestiondesstock/v1/ventes/{codeVente}';

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
  findAllUsingGET8Response(): __Observable<__StrictHttpResponse<Array<VentesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/ventes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VentesDto>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET8(): __Observable<Array<VentesDto>> {
    return this.findAllUsingGET8Response().pipe(
      __map(_r => _r.body as Array<VentesDto>)
    );
  }

  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST8Response(dto: VentesDto): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondesstock/v1/ventes/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST8(dto: VentesDto): __Observable<VentesDto> {
    return this.saveUsingPOST8Response(dto).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * delete
   * @param idVente idVente
   */
  deleteUsingDELETE8Response(idVente: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondesstock/v1/ventes/delete/${encodeURIComponent(String(idVente))}`,
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
   * @param idVente idVente
   */
  deleteUsingDELETE8(idVente: number): __Observable<null> {
    return this.deleteUsingDELETE8Response(idVente).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findById
   * @param idVente idVente
   * @return OK
   */
  findByIdUsingGET8Response(idVente: number): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/ventes/id/${encodeURIComponent(String(idVente))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * findById
   * @param idVente idVente
   * @return OK
   */
  findByIdUsingGET8(idVente: number): __Observable<VentesDto> {
    return this.findByIdUsingGET8Response(idVente).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * findByCode
   * @param codeVente codeVente
   * @return OK
   */
  findByCodeUsingGET2Response(codeVente: string): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/ventes/${encodeURIComponent(String(codeVente))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * findByCode
   * @param codeVente codeVente
   * @return OK
   */
  findByCodeUsingGET2(codeVente: string): __Observable<VentesDto> {
    return this.findByCodeUsingGET2Response(codeVente).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }
}

module VentesControllerService {
}

export { VentesControllerService }
