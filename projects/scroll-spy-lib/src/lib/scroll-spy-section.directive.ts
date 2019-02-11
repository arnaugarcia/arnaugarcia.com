import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[scrollSpySection]'
})
export class ScrollSpySectionDirective implements OnInit {

  private height: number;
  private id: string;
  private distanceTop: number;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.getDistanceFromTop();
    this.getId();
    console.log(`Section ${this.id} is ${this.distanceTop} from the top`);
  }

  private getDistanceFromTop():void {
    this.height = this.element.nativeElement.clientHeight;
     this.distanceTop = window.pageYOffset + this.element.nativeElement.getBoundingClientRect().top;
  }

  private getId():void {
    this.id = this.element.nativeElement.id;
  }
}
