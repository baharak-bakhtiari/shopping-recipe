import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {

  selectedRecipe!:Recipe;

  constructor(private recipeService: RecipeService){}

}


