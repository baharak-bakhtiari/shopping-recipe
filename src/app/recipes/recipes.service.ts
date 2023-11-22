import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    recipeSelected=new EventEmitter<Recipe>();
    recipes: Recipe[]=[
        new Recipe('Salad', 'This salad is healthy', '../../assets/images/salad.jpg'),
         new Recipe("Pasta", "delicious Italian food", '../../assets/images/pasta.jpg')
      ];

      getRecipes() {
        return this.recipes.slice();
      }
} 