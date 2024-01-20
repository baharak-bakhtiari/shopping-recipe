import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] =[
    new Ingredient('tangerine', 20), new Ingredient('banana', 10)
  ];

  onAddIngredients(newIngredient:Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
