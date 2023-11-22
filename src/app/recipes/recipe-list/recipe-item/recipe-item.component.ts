import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input('recipe-item') recipeItem!:Recipe;

  constructor(private recipeService:RecipeService){}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
