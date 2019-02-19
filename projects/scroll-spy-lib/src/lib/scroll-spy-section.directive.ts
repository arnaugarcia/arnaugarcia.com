import {Directive, ElementRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ActiveElementService} from "./active-element.service";

@Directive({
    selector: '[scrollSpySection]'
})
export class ScrollSpySectionDirective implements OnInit {

    readonly DEFAULT_OFFSET = 10;

    private height: number;
    private id: string;
    private distanceTop: number;

    @Input()
    private offset: number = this.DEFAULT_OFFSET;

    private currentScroll: number;

    constructor(@Inject(DOCUMENT)
                private document: Document,
                private element: ElementRef,
                private activeElementService: ActiveElementService) {
    }

    ngOnInit(): void {
        this.getDistanceFromTop();
        this.getId();
        // console.log(`Section ${this.id} is ${this.distanceTop} from the top`);
    }

    @HostListener('window:scroll', []) // for window scroll events
    onScroll() {
        this.currentScroll = this.document.documentElement.scrollTop;
        // console.log(`The current scroll for the section ${this.id} is ${this.currentScroll} and the distance is ${this.distanceTop}`);
        if (this.currentScroll + this.offset > this.distanceTop) {
            console.log(`You have arrive to section: ${this.id}`);
            this.activeElementService.activeItem(this.id);
        }
    }

    private getDistanceFromTop(): void {
        this.height = this.element.nativeElement.clientHeight;
        this.distanceTop = window.pageYOffset + this.element.nativeElement.getBoundingClientRect().top;
    }

    private getId(): void {
        this.id = this.element.nativeElement.id;
    }
}
