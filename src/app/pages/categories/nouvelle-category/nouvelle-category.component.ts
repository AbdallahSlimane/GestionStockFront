import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/gs-api/src/models/category-dto';

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrls: ['./nouvelle-category.component.scss']
})
export class NouvelleCategoryComponent implements OnInit {

  categoryDto : CategoryDto = {};
  errorMsg : Array<string> = [];

  constructor(
    private router:Router,
    private categoryService : CategoryService,
    private activatedRoute : ActivatedRoute
    ) { } 

  ngOnInit(): void {
    const idCategory = this.activatedRoute.snapshot.params['idCategory'];
    if(idCategory){
      this.categoryService.findById(idCategory)
      .subscribe(cat => {
        this.categoryDto = cat;
      })
    }
  }

  cancel():void{
    this.router.navigate(["categories"]);
  }

  enregistrerCategory(){
    this.categoryService.enregistrerCategory(this.categoryDto)
    .subscribe(res =>{
      this.router.navigate(["categories"]);
    },error =>{
      this.errorMsg = error.error.errors;
    })
  }
}
