import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipes.service";

export const RecipesResolver: ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  recipeService: RecipeService = inject(RecipeService),
  dataStorageService: DataStorageService = inject(DataStorageService)
) => {
  const recipes = recipeService.recipes;
  if (recipes.length === 0) {
    return dataStorageService.fetchData();
  }
  else return recipes;
}
