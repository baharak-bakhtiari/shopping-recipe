import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoRecipeComponent } from "./recipes/no-recipe/no-recipe.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes", component: RecipesComponent, children: [
      { path: "", component: NoRecipeComponent },
      { path: "new", component: RecipesEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipesEditComponent },
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
