import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[]=[
    new Recipe('Salad', 'This salad is healthy', 'https://www.healthygreenkitchen.com/wp-content/uploads/2022/02/healthy-quinoa-chicken-salad-bowl.jpg'), new Recipe("Pasta", "delicious Italian food", "https://www.licious.in/blog/wp-content/uploads/2020/12/Penne-Alfredo.jpg")
  ];
}
