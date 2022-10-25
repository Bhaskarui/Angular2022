import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingradients } from '../shared/ingradients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipes } from './recipes.mdel';

@Injectable()
export class RecipesService {
  // recipeSelected = new EventEmitter<Recipes>();
  // recipeSelected = new Subject<Recipes>();

  constructor(private slService: ShoppingListService) { }

  recipes: Recipes[] = [
    new Recipes('The Test Recipe',
      'This is a simply test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
      new Ingradients('Meat', 900),
      new Ingradients('French Fries', 200)
    ]),
    new Recipes('The Another Test Recipe',
      'This is a simply test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingradients('Bun', 9),
      new Ingradients('Meat', 700)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeId(index:number){
    return this.recipes.slice()[index];
  }

  addIngradientToShoppingList(ingradients: Ingradients[]) {
    this.slService.addIngradients(ingradients);
  }


}
