import { SafeResourceUrl } from '@angular/platform-browser';

export class Recipe {
  public name: string;
  public description: string;
  public urlPath: SafeResourceUrl;

  constructor(name: string, desc: string, urlPath: SafeResourceUrl) {
    this.name = name;
    this.description = desc;
    this.urlPath = urlPath;
  }
}
