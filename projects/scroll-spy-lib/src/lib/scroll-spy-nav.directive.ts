import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[scrollSpyNav]'
})
export class ScrollSpyNavDirective {

  constructor(private element: ElementRef) {

  }

}
