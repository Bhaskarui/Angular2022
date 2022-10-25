import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingradients } from 'src/app/shared/ingradients.model';
import { Recipes } from '../recipes.mdel';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  // @Input() recipe?: Recipes;
  recipe?: Recipes;
  id?: number;
  constructor(private reService: RecipesService,
     private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.reService.getRecipeId(this.id);
    })
  }

  onAddToShoppingList() {
    this.reService.addIngradientToShoppingList;
  }

  onEditRecipe(){
// this.router.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'});
this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'})
  }

}