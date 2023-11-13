import { Recipe } from './recipe.model';


export class RecipeService {
    recipes: Recipe[]=[
        new Recipe('Salad', 'This salad is healthy', '../../assets/images/salad.jpg'),
         new Recipe("Pasta", "delicious Italian food", '../../assets/images/pasta.jpg')
      ];

      getRecipes() {
        return this.recipes;
      }
}