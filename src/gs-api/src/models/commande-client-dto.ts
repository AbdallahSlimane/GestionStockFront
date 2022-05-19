/* tslint:disable */
import { ClientDto } from './client-dto';
import { LigneCommandeClientDto } from './ligne-commande-client-dto';
export interface CommandeClientDto {
  client?: ClientDto;
  code?: string;
  commandeLivree?: boolean;
  dateCommande?: string;
  etatCommmande?: 'EN_PREPARATION' | 'LIVREE' | 'VALIDEE';
  id?: number;
  idEntreprise?: number;
  ligneCommandeClients?: Array<LigneCommandeClientDto>;
}
