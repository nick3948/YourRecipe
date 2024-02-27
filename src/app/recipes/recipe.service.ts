import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'SX',
      'Solution Extention',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/adding-apple-to-make-christmas-gingerbread-cookies-more-soft-free-photo.jpg?w=2210&quality=70'
    ),
    new Recipe(
      'TSX',
      'Schedule Task',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/adding-apple-to-make-christmas-gingerbread-cookies-more-soft-free-photo.jpg?w=2210&quality=70'
    ),
    new Recipe(
      'WCX',
      'Task User Extension',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/adding-apple-to-make-christmas-gingerbread-cookies-more-soft-free-photo.jpg?w=2210&quality=70'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
