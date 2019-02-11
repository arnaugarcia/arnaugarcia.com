import {ContentChildren, Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {ScrollSpySectionDirective} from "./scroll-spy-section.directive";
import {DOCUMENT} from "@angular/common";

@Directive({
    selector: '[scrollSpyNav]'
})
export class ScrollSpyNavDirective implements OnInit {

    readonly DEFAULT_ACTIVE_CLASS = 'active';

    @Input()
    private activeClass = this.DEFAULT_ACTIVE_CLASS;

    @Input()
    private offset: number = 20;

    private currentScroll: number = 0;

    private liTag: NodeList;
    private ulTag: NodeList;

    @ContentChildren(ScrollSpySectionDirective)
    private sections;

    constructor(
        @Inject(DOCUMENT)
        private document: Document,
        private renderer: Renderer2,
        private element: ElementRef
    ) {}

    ngOnInit(): void {
        this.getLinks();
        console.log(this.sections);
    }

    @HostListener('window:scroll', []) // for window scroll events
    onScroll() {
        this.currentScroll = this.document.documentElement.scrollTop;
        console.log(this.currentScroll);
    }

    private getLinks() {
        this.ulTag = this.element.nativeElement.childNodes;
        if (!this.ulTag && !(this.ulTag[0].nodeName == 'UL' || this.ulTag[0].nodeName == 'OL')) {
            Error("The selected tag hasn't a list on ini");
        }
        this.liTag = this.ulTag[0].childNodes;
        this.liTag.forEach((link: Node) => {
            if (link.childNodes[0]) { // This will be the a NODE (Check)
                this.activateLink(link);
            }
        });
    }

    private activateLink(link: Node) {
        this.renderer.addClass(link.childNodes[0], this.activeClass);
    }

}
