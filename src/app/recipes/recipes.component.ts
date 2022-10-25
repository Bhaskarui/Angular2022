import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.mdel';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
selectedRecipe?:Recipes;
  constructor(private reService:RecipesService) { }

  ngOnInit(): void {
    // this.reService.recipeSelected.subscribe((recipe:Recipes)=>{
    //   this.selectedRecipe = recipe;
    // })
  }

  // onrecipewasSelected(selected:Recipes){
  //   this.selectedRecipe = selected;
  // }

}
