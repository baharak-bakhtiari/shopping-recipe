import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') isShow=false;

  @HostListener('click') toggleOpen() {
    this.isShow=!this.isShow;
  }

}
