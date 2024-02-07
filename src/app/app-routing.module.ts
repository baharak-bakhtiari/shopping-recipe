import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { NoRecipeComponent } from "./recipes/no-recipe/no-recipe.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { RecipesResolver } from "./recipes/recipes-resolver";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes", component: RecipesComponent, children: [
      { path: "", component: NoRecipeComponent },
      { path: "new", component: RecipesEditComponent },
      { path: ":id", component: RecipeDetailComponent, resolve: [RecipesResolver] },
      { path: ":id/edit", component: RecipesEditComponent, resolve: [RecipesResolver] },
    ]
  },
  { path: "auth", component: AuthComponent },
  { path: "shopping-list", component: ShoppingListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
