import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Salad',
      'This salad is healthy',
      '../../assets/images/salad.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Vegetables', 5),
      ]),
    new Recipe(
      "Pasta",
      "delicious Italian food",
      '../../assets/images/pasta.jpg',
      [
        new Ingredient('Lettuce', 4),
        new Ingredient('Tomatos', 3),
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
} 
