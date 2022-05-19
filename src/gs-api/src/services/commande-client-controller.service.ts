/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeClientDtoRes } from '../models/commande-client-dto-res';
import { CommandeClientDtoReq } from '../models/commande-client-dto-req';
import { ResponseEntity } from '../models/response-entity';

/**
 * Commande Client Controller
 */
@Injectable({
  providedIn: 'root',
})
class CommandeClientControllerService extends __BaseService {
  static readonly findAllUsingGET3Path = '/gestiondesstock/v1/commandesclients/all';
  static readonly updateClientUsingPATCHPath = '/gestiondesstock/v1/commandesclients/client/update/{idCommande}/{idClient}';
  static readonly saveUsingPOST3Path = '/gestiondesstock/v1/commandesclients/create';
  static readonly deleteUsingDELETE3Path = '/gestiondesstock/v1/commandesclients/delete/{idCommandeClient}';
  static readonly updateEtatCommandeUsingPATCHPath = '/gestiondesstock/v1/commandesclients/etat/update/{idCommande}/{etatCommande}';
  static readonly updateQuantiteCommandeUsingPATCHPath = '/gestiondesstock/v1/commandesclients/quantite/update/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByCodeUsingGET1Path = '/gestiondesstock/v1/commandesclients/{codeCommandeClient}';
  static readonly findByIdUsingGET3Path = '/gestiondesstock/v1/{idCommandeClient}';

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
  findAllUsingGET3Response(): __Observable<__StrictHttpResponse<Array<CommandeClientDtoRes>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/commandesclients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeClientDtoRes>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET3(): __Observable<Array<CommandeClientDtoRes>> {
    return this.findAllUsingGET3Response().pipe(
      __map(_r => _r.body as Array<CommandeClientDtoRes>)
    );
  }

  /**
   * updateClient
   * @param params The `CommandeClientControllerService.UpdateClientUsingPATCHParams` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `idClient`: idClient
   *
   * @return OK
   */
  updateClientUsingPATCHResponse(params: CommandeClientControllerService.UpdateClientUsingPATCHParams): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondesstock/v1/commandesclients/client/update/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * updateClient
   * @param params The `CommandeClientControllerService.UpdateClientUsingPATCHParams` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `idClient`: idClient
   *
   * @return OK
   */
  updateClientUsingPATCH(params: CommandeClientControllerService.UpdateClientUsingPATCHParams): __Observable<CommandeClientDtoRes> {
    return this.updateClientUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST3Response(dto: CommandeClientDtoReq): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondesstock/v1/commandesclients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * save
   * @param dto dto
   * @return OK
   */
  saveUsingPOST3(dto: CommandeClientDtoReq): __Observable<CommandeClientDtoRes> {
    return this.saveUsingPOST3Response(dto).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * delete
   * @param idCommandeClient idCommandeClient
   * @return OK
   */
  deleteUsingDELETE3Response(idCommandeClient: number): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondesstock/v1/commandesclients/delete/${encodeURIComponent(String(idCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * delete
   * @param idCommandeClient idCommandeClient
   * @return OK
   */
  deleteUsingDELETE3(idCommandeClient: number): __Observable<ResponseEntity> {
    return this.deleteUsingDELETE3Response(idCommandeClient).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }

  /**
   * updateEtatCommande
   * @param params The `CommandeClientControllerService.UpdateEtatCommandeUsingPATCHParams` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `etatCommande`: etatCommande
   *
   * @return OK
   */
  updateEtatCommandeUsingPATCHResponse(params: CommandeClientControllerService.UpdateEtatCommandeUsingPATCHParams): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondesstock/v1/commandesclients/etat/update/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * updateEtatCommande
   * @param params The `CommandeClientControllerService.UpdateEtatCommandeUsingPATCHParams` containing the following parameters:
   *
   * - `idCommande`: idCommande
   *
   * - `etatCommande`: etatCommande
   *
   * @return OK
   */
  updateEtatCommandeUsingPATCH(params: CommandeClientControllerService.UpdateEtatCommandeUsingPATCHParams): __Observable<CommandeClientDtoRes> {
    return this.updateEtatCommandeUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * updateQuantiteCommande
   * @param params The `CommandeClientControllerService.UpdateQuantiteCommandeUsingPATCHParams` containing the following parameters:
   *
   * - `quantite`: quantite
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  updateQuantiteCommandeUsingPATCHResponse(params: CommandeClientControllerService.UpdateQuantiteCommandeUsingPATCHParams): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondesstock/v1/commandesclients/quantite/update/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.quantite))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * updateQuantiteCommande
   * @param params The `CommandeClientControllerService.UpdateQuantiteCommandeUsingPATCHParams` containing the following parameters:
   *
   * - `quantite`: quantite
   *
   * - `idLigneCommande`: idLigneCommande
   *
   * - `idCommande`: idCommande
   *
   * @return OK
   */
  updateQuantiteCommandeUsingPATCH(params: CommandeClientControllerService.UpdateQuantiteCommandeUsingPATCHParams): __Observable<CommandeClientDtoRes> {
    return this.updateQuantiteCommandeUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * findByCode
   * @param codeCommandeClient codeCommandeClient
   * @return OK
   */
  findByCodeUsingGET1Response(codeCommandeClient: string): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/commandesclients/${encodeURIComponent(String(codeCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * findByCode
   * @param codeCommandeClient codeCommandeClient
   * @return OK
   */
  findByCodeUsingGET1(codeCommandeClient: string): __Observable<CommandeClientDtoRes> {
    return this.findByCodeUsingGET1Response(codeCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }

  /**
   * findById
   * @param idCommandeClient idCommandeClient
   * @return OK
   */
  findByIdUsingGET3Response(idCommandeClient: number): __Observable<__StrictHttpResponse<CommandeClientDtoRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondesstock/v1/${encodeURIComponent(String(idCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDtoRes>;
      })
    );
  }
  /**
   * findById
   * @param idCommandeClient idCommandeClient
   * @return OK
   */
  findByIdUsingGET3(idCommandeClient: number): __Observable<CommandeClientDtoRes> {
    return this.findByIdUsingGET3Response(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDtoRes)
    );
  }
}

module CommandeClientControllerService {

  /**
   * Parameters for updateClientUsingPATCH
   */
  export interface UpdateClientUsingPATCHParams {

    /**
     * idCommande
     */
    idCommande: number;

    /**
     * idClient
     */
    idClient: number;
  }

  /**
   * Parameters for updateEtatCommandeUsingPATCH
   */
  export interface UpdateEtatCommandeUsingPATCHParams {

    /**
     * idCommande
     */
    idCommande: number;

    /**
     * etatCommande
     */
    etatCommande: 'EN_PREPARATION' | 'LIVREE' | 'VALIDEE';
  }

  /**
   * Parameters for updateQuantiteCommandeUsingPATCH
   */
  export interface UpdateQuantiteCommandeUsingPATCHParams {

    /**
     * quantite
     */
    quantite: number;

    /**
     * idLigneCommande
     */
    idLigneCommande: number;

    /**
     * idCommande
     */
    idCommande: number;
  }
}

export { CommandeClientControllerService }
