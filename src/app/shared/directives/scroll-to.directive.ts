import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: 'a[scrollTo]'
})
export class ScrollToDirective {

  @Input()
  smooth = true;

  @HostListener('click', ['$event']) onClick($event) {
    $event.preventDefault();
    const section = this.element.nativeElement.href.split('#')[1];
    if (!section) {
      return;
    }
    if (this.smooth) {
      document.querySelector(`#${section}`).scrollIntoView({behavior: 'smooth'});
    } else {
      document.querySelector(`#${section}`).scrollIntoView();
    }
  }

  constructor(private element: ElementRef) {

  }

}
