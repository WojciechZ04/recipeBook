import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sandwich',
      'Simple sandwich',
      'https://somethingaboutsandwiches.com/wp-content/uploads/2022/04/ham-sandwich.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Ham', 2),
        new Ingredient('Mayo', 1)
      ]
    ),
    new Recipe(
      'Neapolitan Pizza',
      'Neapolitan pizza, also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese',
      `https://vincenzosplate.com/wp-content/uploads/2022/08/1500x1500-Photo-1_1968-How-to-MAKE-NEAPOLITAN-PIZZA-with-Dry-Yeast-at-Home-Better-than-a-Pizzeria-in-Naples-V1.jpg`,
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Ham', 1),
        new Ingredient('Pizza Dough', 1)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
    }
}
