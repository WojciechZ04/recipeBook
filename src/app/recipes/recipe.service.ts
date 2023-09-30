import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new Subject<Recipe>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Sandwich',
  //     'Simple sandwich',
  //     'https://somethingaboutsandwiches.com/wp-content/uploads/2022/04/ham-sandwich.jpg',
  //     [
  //       new Ingredient('Bread', 2),
  //       new Ingredient('Ham', 2),
  //       new Ingredient('Mayo', 1),
  //     ]
  //   ),
  //   new Recipe(
  //     'Neapolitan Pizza',
  //     'Neapolitan pizza, also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese',
  //     `https://vincenzosplate.com/wp-content/uploads/2022/08/1500x1500-Photo-1_1968-How-to-MAKE-NEAPOLITAN-PIZZA-with-Dry-Yeast-at-Home-Better-than-a-Pizzeria-in-Naples-V1.jpg`,
  //     [
  //       new Ingredient('Cheese', 1),
  //       new Ingredient('Ham', 1),
  //       new Ingredient('Pizza Dough', 1),
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
