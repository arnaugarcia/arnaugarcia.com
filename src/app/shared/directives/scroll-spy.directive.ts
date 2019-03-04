import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {ScrollSpyService} from "./scroll-spy.service";

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyDirective {

    @Input() public spiedTags = [];
    private currentSection: string;

    constructor(
        private _el: ElementRef,
        private scrollSpyService: ScrollSpyService) {
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        let currentSection: string;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollingElement.scrollTop;
        const parentOffset = event.target.scrollingElement.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection && currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.scrollSpyService.changeSection(this.currentSection);
        }
    }

}
