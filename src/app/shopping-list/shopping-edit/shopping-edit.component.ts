import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {}
  ngOnInit() {}

  onAddClick() {
    const nameInp = this.nameInputRef.nativeElement.value;
    const quantityInp = this.quantityInputRef.nativeElement.value;
    const ingAdded = new Ingredient(nameInp, quantityInp);
    this.slService.addIngredient(ingAdded);
  }
}
