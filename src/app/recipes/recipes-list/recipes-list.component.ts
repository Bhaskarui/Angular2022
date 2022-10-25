import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes } from '../recipes.mdel';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[] = [];
  // recipes: Recipes[] = [
  //   new Recipes('The Test Recipe', 'This is a simply test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  //   new Recipes('The Another Test Recipe', 'This is a simply test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  // ];

  constructor(private reService: RecipesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.reService.getRecipes();

  }

  // @Output() recipewasSelected = new EventEmitter<Recipes>()
  // onRecipeSelected(recipeElement: Recipes) {
  //   this.recipewasSelected.emit(recipeElement)

  // }

  onNewRecipe() {
    // this.router.navigate(['/..', 'new'])
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling:'preserve'})
  }

}
