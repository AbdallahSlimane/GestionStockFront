import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.scss']
})
export class PageCategorieComponent implements OnInit {

  listCategories : Array<CategoryDto> = [];
  selectedCatIdDelete = -1;
  errorMsg = '';
  
  constructor(
    private router:Router,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.findAllCategories();
  }
  
  findAllCategories(){
    this.categoryService.findAll()
    .subscribe(res=>{
      this.listCategories = res;
    })
  }

  nouvelCategory(): void{
    this.router.navigate(['nouvellecategorie']);
  }

  modifierCat(id? : number) : void{
    this.router.navigate(['nouvellecategorie' , id]);
  }

  confirmerEtSupprimerCat() : void{
    if (this.selectedCatIdDelete !== -1){
      this.categoryService.delete(this.selectedCatIdDelete)
      .subscribe(res =>{
        this.findAllCategories();
      }, error =>{
        this.errorMsg = error.error.message;
      })
    }
  }

  annulerSuppressionCat() : void{
    this.selectedCatIdDelete = -1;
  }

  selectCatPourSupprimer(id : any) : void{
    this.selectedCatIdDelete = id;
  }
}
