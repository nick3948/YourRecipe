import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;

  protected myForm: FormGroup;
  constructor(private slService: ShoppingListService) {
    this.myForm = new FormGroup({
      name: new FormControl<string>(null, [Validators.required]),
      quantity: new FormControl<string>(null, [Validators.required]),
    });
  }
  ngOnInit() {}

  onAddClick() {
    const formValue = this.myForm.value;
    const ingAdded = new Ingredient(formValue.name, formValue.quantity);
    this.slService.addIngredient(ingAdded);
    this.myForm.reset();
  }
  onDeleteClick() {
    console.log('Delete button clicked');
  }

  onClearClick() {
    console.log('Clear button clicked');
  }

  onSubmit(): void {
    this.onAddClick();
  }
}
