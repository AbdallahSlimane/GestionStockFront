import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientDto } from 'src/gs-api/src/models';
import { ClientControllerService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CltfrsService {

  constructor(
    private userService : UserService,
    private clientService : ClientControllerService
  ) { }


  enregistrerClient(clientDto : ClientDto) : Observable<ClientDto> {
    clientDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.clientService.saveUsingPOST2(clientDto);
  }

  findAllClient() : Observable<ClientDto[]>{
    return this.clientService.findAllUsingGET2();
  }

  deleteClient(idClient : number) : Observable<any>{
    return this.clientService.deleteUsingDELETE2(idClient);
  }

  findClientById(idClient : number) : Observable<ClientDto>{
    return this.clientService.findByIdUsingGET2(idClient);
  }
}
