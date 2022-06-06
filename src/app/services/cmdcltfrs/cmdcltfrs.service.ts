import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommandeClientDto, LigneCommandeClientDto } from 'src/gs-api/src/models';
import { CommandeClientControllerService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CmdcltfrsService {

  constructor(
    private commandeClientService : CommandeClientControllerService,
    private userService: UserService
  ) { }

  enregistrerCommandeClient(commandeClient: CommandeClientDto): Observable<CommandeClientDto>{
    commandeClient.idEntreprise = this.userService.getConnectedUser().entreprise?.id
    return this.commandeClientService.saveUsingPOST3(commandeClient)
  }

  findAllCommandeClient() : Observable<CommandeClientDto[]>{
    return this.commandeClientService.findAllUsingGET3()
  }

  findAllLigneCommandeClient(idCmd? : number): Observable<LigneCommandeClientDto[]>{
      return this.commandeClientService.findAllLignesCommandesClientByCommandeCliendIdUsingGET(idCmd!)

  }

}
