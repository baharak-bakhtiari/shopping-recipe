import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  //recipes: Recipe[] = [
  //  new Recipe(
  //    'Salad',
  //    'This salad is healthy',
  //    '../../assets/images/salad.jpg',
  //    [
  //      new Ingredient('Meat', 2),
  //      new Ingredient('Vegetables', 5),
  //    ]),
  //  new Recipe(
  //    "Pasta",
  //    "delicious Italian food",
  //    '../../assets/images/pasta.jpg',
  //    [
  //      new Ingredient('Lettuce', 4),
  //      new Ingredient('Tomatos', 3),
  //    ])
  //];

  recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    console.log(this.recipes[index].ingredients);
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
} 
