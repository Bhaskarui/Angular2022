import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipesForm!: FormGroup;
  recipeId: any;
  // recipe: any;
  constructor(private activatedRoute: ActivatedRoute, private resService: RecipesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    })
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    if (this.editMode) {
      const recipeId = this.resService.getRecipeId(this.id);
      recipeName = this.recipeId?.name;
      recipeImagePath = this.recipeId?.imagePath;
      recipeDescription = this.recipeId?.description
    }

    this.recipesForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });
  }
  onSubmit() {
    console.log(this.recipesForm?.value);
  }
}
