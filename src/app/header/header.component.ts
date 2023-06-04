import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() flag = new EventEmitter<string>();

  onClick(value: string) {
    this.flag.emit(value);
  }
}
