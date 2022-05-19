/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { CommandeFournisseurDto } from './commande-fournisseur-dto';
export interface FournisseurDto {
  adresse?: AdresseDto;
  commandeFournisseurs?: Array<CommandeFournisseurDto>;
  id?: number;
  idEntreprise?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
