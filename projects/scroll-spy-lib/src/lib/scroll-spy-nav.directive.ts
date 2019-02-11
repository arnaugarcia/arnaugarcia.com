import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[scrollSpyNav]'
})
export class ScrollSpyNavDirective implements OnInit {

    readonly DEFAULT_ACTIVE_CLASS = 'active';

    @Input()
    private activeClass = this.DEFAULT_ACTIVE_CLASS;
    private links: NodeList;
    private ulTag: NodeList;

    constructor(private renderer: Renderer2, private element: ElementRef) {
    }

    ngOnInit(): void {
        this.getLinks();
    }

    private getLinks() {
        this.ulTag = this.element.nativeElement.childNodes;
        if (!this.ulTag && !(this.ulTag[0].nodeName == 'UL' || this.ulTag[0].nodeName == 'OL')) {
            Error("The selected tag hasn't a list on ini");
        }
        this.links = this.ulTag[0].childNodes;
        this.links.forEach((link: Node) => {
            if (link.childNodes[0]) {
                this.renderer.addClass(link.childNodes[0], this.activeClass);
            }
        });
    }

}
