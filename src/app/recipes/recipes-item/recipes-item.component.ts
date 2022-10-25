import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipes.mdel';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe?: Recipes;
  @Input() index?:number;
  // @Output() recipeSelected = new EventEmitter<void>()
  constructor(private reService:RecipesService) { }

  ngOnInit(): void {
  }


  onSelectedLink() {
    // this.recipeSelected.emit()
    // this.reService.recipeSelected.emit(this.recipe);
    // this.reService.recipeSelected.next(this.recipe);
  }
}
