import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  protected _recipe: Recipe;
  constructor(private sanitizer: DomSanitizer) {}

  @Input() set recipe(value: Recipe) {
    this._recipe = value;
  }
}
