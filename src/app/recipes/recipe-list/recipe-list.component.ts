import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  onItemSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
  recipes: Recipe[] = [
    new Recipe(
      'testing',
      'test desc',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/adding-apple-to-make-christmas-gingerbread-cookies-more-soft-free-photo.jpg?w=2210&quality=70'
    ),
    new Recipe(
      'testing2',
      'test desc2',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/adding-apple-to-make-christmas-gingerbread-cookies-more-soft-free-photo.jpg?w=2210&quality=70'
    ),
  ];
}
