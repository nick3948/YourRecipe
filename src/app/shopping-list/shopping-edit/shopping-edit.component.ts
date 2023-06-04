import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  onAddClick() {
    const nameInp=this.nameInputRef.nativeElement.value;
    const quantityInp = this.quantityInputRef.nativeElement.value;
    const ingAdded=new Ingredient(nameInp,quantityInp);
    this.ingredientAdded.emit(ingAdded);
  }
}
