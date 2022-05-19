/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ClientDto } from '../models/client-dto';

/**
 * Client Controller
 */
@Injectable({
  providedIn: 'root',
})
class ClientControllerService extends __BaseService {
  static readonly findAllUsingGET2Path = '/gestiondesstock/v1/clients/all';
  static readonly saveUsingPOST2Path = '/gestiondesstock/v1/clients/create';
  static readonly deleteUsingDELETE2Path = '/gestiondesstock/v1/clients/delete/{idClient}';
  static readonly findByIdUsingGET2Path = '/gestiondesstock/v1clients/{idClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des clients
   *
   * Cette methode permet de charcher et renvoyer la liste des clients qui existant dans la BDD
   * @return OK
   */
  findAllUsingGET2Response(): __Observable<__StrictHttpResponse<Array<ClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/clients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des clients
   *
   * Cette methode permet de charcher et renvoyer la liste des clients qui existant dans la BDD
   * @return OK
   */
  findAllUsingGET2(): __Observable<Array<ClientDto>> {
    return this.findAllUsingGET2Response().pipe(
      __map(_r => _r.body as Array<ClientDto>)
    );
  }

  /**
   * Enregistrer une client
   *
   * Cette methode d'enregistrer ou modificer une client
   * @param dto dto
   * @return OK
   */
  saveUsingPOST2Response(dto: ClientDto): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondesstock/v1/clients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Enregistrer une client
   *
   * Cette methode d'enregistrer ou modificer une client
   * @param dto dto
   * @return OK
   */
  saveUsingPOST2(dto: ClientDto): __Observable<ClientDto> {
    return this.saveUsingPOST2Response(dto).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Supprimer une categorie
   *
   * Cette methode permet de supprimer une categorie par ID
   * @param idClient idClient
   */
  deleteUsingDELETE2Response(idClient: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondesstock/v1/clients/delete/${encodeURIComponent(String(idClient))}`,
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
   * @param idClient idClient
   */
  deleteUsingDELETE2(idClient: number): __Observable<null> {
    return this.deleteUsingDELETE2Response(idClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher un client par Id
   *
   * Cette methode permet de recherhcer un client par son Id
   * @param idClient idClient
   * @return OK
   */
  findByIdUsingGET2Response(idClient: number): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1clients/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Rechercher un client par Id
   *
   * Cette methode permet de recherhcer un client par son Id
   * @param idClient idClient
   * @return OK
   */
  findByIdUsingGET2(idClient: number): __Observable<ClientDto> {
    return this.findByIdUsingGET2Response(idClient).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }
}

module ClientControllerService {
}

export { ClientControllerService }
