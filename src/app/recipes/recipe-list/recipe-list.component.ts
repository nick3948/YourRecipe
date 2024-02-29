import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { SearchBehavior } from 'src/app/shared/search-behaviour.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(
    private recipeService: RecipeService,
    private readonly searchService: SearchBehavior
  ) {}
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.searchService.serachBehviour$.subscribe((search) => {
      this.recipes = this.recipeService
        .getRecipes()
        .filter(
          (data) =>
            data.name.toLowerCase().includes(search.toLowerCase()) ||
            data.description.toLowerCase().includes(search.toLowerCase())
        );
    });
  }
}
