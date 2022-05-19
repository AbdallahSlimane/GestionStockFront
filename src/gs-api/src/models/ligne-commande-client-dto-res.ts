/* tslint:disable */
import { ArticleDto } from './article-dto';
import { CommandeClientDtoRes } from './commande-client-dto-res';
export interface LigneCommandeClientDtoRes {
  article?: ArticleDto;
  commandeClient?: CommandeClientDtoRes;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
