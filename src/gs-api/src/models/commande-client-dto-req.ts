/* tslint:disable */
import { ClientDto } from './client-dto';
import { LigneCommandeClientDtoReq } from './ligne-commande-client-dto-req';
export interface CommandeClientDtoReq {
  client?: ClientDto;
  code?: string;
  dateCommande?: string;
  etatCommmande?: 'EN_PREPARATION' | 'LIVREE' | 'VALIDEE';
  id?: number;
  idEntreprise?: number;
  ligneCommandeClients?: Array<LigneCommandeClientDtoReq>;
}
