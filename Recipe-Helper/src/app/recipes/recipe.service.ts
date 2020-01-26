import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingedient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a test', 
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is a another test', 
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('Buns', 2)
            ])
      ];

    constructor(private slService: ShoppingListService) {}
    
    getRecipes(){
          return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number){
        return this.recipes.slice()[index];
    }
}