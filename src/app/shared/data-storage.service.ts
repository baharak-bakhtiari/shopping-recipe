import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put("https://ng-shopping-recipe-b5cef-default-rtdb.firebaseio.com/recipes.json", recipes).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  fetchData() {
    this.http.get<Recipe[]>("https://ng-shopping-recipe-b5cef-default-rtdb.firebaseio.com/recipes.json").subscribe(
      recipes => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
