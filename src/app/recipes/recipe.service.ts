import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private sanitizer: DomSanitizer) {}
  private recipes: Recipe[] = [
    new Recipe(
      'PEET',
      'Custom Worker',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://planongroup-my.sharepoint.com/personal/sagar_singh_planonsoftware_com/_layouts/15/embed.aspx?UniqueId=97fb4674-9b94-4785-8777-0facb7ddab89&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create'
      )
    ),
    new Recipe(
      'EventConnector',
      'inbound & outbound',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://planongroup-my.sharepoint.com/personal/sagar_singh_planonsoftware_com/_layouts/15/embed.aspx?UniqueId=41d890f5-e32f-461a-97c4-dff37f135757&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create'
      )
    ),
    new Recipe(
      'XSLT',
      'Transformations',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://planongroup-my.sharepoint.com/personal/suryaprathap_reddy_planonsoftware_com/_layouts/15/embed.aspx?UniqueId=a9478fbd-45dd-468a-9c90-d53cb299ed67&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create'
      )
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
