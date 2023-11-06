import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  newIngredient!:Ingredient;
  @Output() addIngredients=new EventEmitter<Ingredient>();;

  onAddIngredient(ingredientName:HTMLInputElement, ingredientAmount:HTMLInputElement) {
    const newIngredient=new Ingredient(ingredientName.value, +(ingredientAmount.value));
    this.addIngredients.emit(newIngredient);
  }
}
