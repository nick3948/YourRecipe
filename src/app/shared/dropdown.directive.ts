import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
    const dropdownMenu =
      this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      if (this.isOpen) {
        this.renderer.addClass(dropdownMenu, 'show');
      } else {
        this.renderer.removeClass(dropdownMenu, 'show');
      }
    }
  }
}
