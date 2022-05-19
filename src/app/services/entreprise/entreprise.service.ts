import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrepriseDto } from 'src/gs-api/src/models/entreprise-dto';
import { EntrepriseControllerService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private entrepriseService:EntrepriseControllerService) {}

  sincrire( entreprise:EntrepriseDto):Observable<EntrepriseDto>{
    return this.entrepriseService.saveUsingPOST5(entreprise);
  }
}
