/* tslint:disable */
import { ClientDto } from './client-dto';
import { LigneCommandeClientDtoRes } from './ligne-commande-client-dto-res';
export interface CommandeClientDtoRes {
  client?: ClientDto;
  code?: string;
  commandeLivree?: boolean;
  dateCommande?: string;
  etatCommmande?: 'EN_PREPARATION' | 'LIVREE' | 'VALIDEE';
  id?: number;
  idEntreprise?: number;
  ligneCommandeClients?: Array<LigneCommandeClientDtoRes>;
}
