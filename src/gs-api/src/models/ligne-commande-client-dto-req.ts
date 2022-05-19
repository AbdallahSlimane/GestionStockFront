/* tslint:disable */
import { ArticleDto } from './article-dto';
import { CommandeClientDtoReq } from './commande-client-dto-req';
export interface LigneCommandeClientDtoReq {
  article?: ArticleDto;
  commandeClient?: CommandeClientDtoReq;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
