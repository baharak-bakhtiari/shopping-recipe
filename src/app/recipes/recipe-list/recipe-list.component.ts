import { Component,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[]=[];

  constructor(private recipeService: RecipeService){}

  ngOnInit() {
    this.recipes= this.recipeService.getRecipes();
  }

  recipeJustSelected(recipeElement:Recipe){
    this.recipeWasSelected.emit(recipeElement);
  }

}
