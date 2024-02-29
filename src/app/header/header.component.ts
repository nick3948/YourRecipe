import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBehavior } from '../shared/search-behaviour.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() flag = new EventEmitter<string>();

  protected searchInput = new FormControl('');
  public constructor(private readonly searchService: SearchBehavior) {
    this.searchInput.valueChanges.subscribe((text) => {
      this.onValueChange(text);
    });
  }

  onClick(value: string) {
    this.flag.emit(value);
  }

  onValueChange(value: string): void {
    this.searchService.serachValue = value;
  }
}
