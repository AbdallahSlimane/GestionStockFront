import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeClientDto } from 'src/gs-api/src/models';
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
    console.log(commandeClient.idEntreprise)
    return this.commandeClientService.saveUsingPOST3(commandeClient)
  }

}
