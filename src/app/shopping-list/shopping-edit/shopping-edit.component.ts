import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild("addForm") slForm!: NgForm;

  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;
  newIngredient!: Ingredient;

  constructor(private slService: ShoppingListService) {

  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getEditableIngredient(index);
        this.slForm.setValue(
          {
            'name': this.editedItem.name,
            'amount': this.editedItem.amount
          }
        )
      }
    );
  }

  onAddIngredient(addForm: NgForm) {
    const ingName = addForm.value.name;
    const ingAmount = addForm.value.amount;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
    if (this.editMode) this.editMode = false;
    this.slForm.reset();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
