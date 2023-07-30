import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
  new Recipe('Sandwich', 'Simple sandwich', 'https://somethingaboutsandwiches.com/wp-content/uploads/2022/04/ham-sandwich.jpg'),
  new Recipe('Neapolitan Pizza', 'Neapolitan pizza, also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese', `https://vincenzosplate.com/wp-content/uploads/2022/08/1500x1500-Photo-1_1968-How-to-MAKE-NEAPOLITAN-PIZZA-with-Dry-Yeast-at-Home-Better-than-a-Pizzeria-in-Naples-V1.jpg`)
  ];
}
