import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryDto } from 'src/gs-api/src/models';
import { CategoryControllerService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private userService : UserService,
    private categoryService : CategoryControllerService
  ) { }

  enregistrerCategory( categgoryDto : CategoryDto): Observable<CategoryDto>{
    categgoryDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.categoryService.saveUsingPOST1(categgoryDto);
  }

  findAll(): Observable<CategoryDto[]> {
    return this.categoryService.findAllUsingGET1();
  }

  findById(id : number) : Observable<CategoryDto>{
    return this.categoryService.findByIdUsingGET1(id);
  }

  delete(idCategory : number): Observable<any>{
    
      return this.categoryService.deleteUsingDELETE1Response(idCategory);
    }

  
}
