import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {ActiveElementService} from "./active-element.service";

@Directive({
    selector: '[scrollSpyNav]'
})
export class ScrollSpyNavDirective implements OnInit {

    readonly DEFAULT_ACTIVE_CLASS = 'active';

    @Input()
    private activeClass = this.DEFAULT_ACTIVE_CLASS;

    private liTag: NodeList;
    private ulTag: NodeList;

    private links: Node[] = [];

    constructor(
        private renderer: Renderer2,
        private element: ElementRef,
        private activeElementService: ActiveElementService
    ) {
    }

    ngOnInit(): void {
        this.getLinks();
        this.activeElementService.currentElementActive.subscribe((elementActive: string) => { // Subscribe to the current element
            //console.log(this.links[0]);
            let linkActive = this.links.find((link: Element) => link.id == elementActive);
            if (linkActive) {
                this.activateLink(linkActive);
            }
            this.links.forEach((link: Node) => {
                if (link && link.className == this.DEFAULT_ACTIVE_CLASS && link != linkActive) {
                    this.deactivateLink(link);
                }
            })
        });
    }

    private getLinks() {
        this.ulTag = this.element.nativeElement.childNodes;
        if (!this.ulTag && !(this.ulTag[0].nodeName == 'UL' || this.ulTag[0].nodeName == 'OL')) {
            Error("The selected tag hasn't a list on ini");
        }
        this.liTag = this.ulTag[0].childNodes;
        this.liTag.forEach((list: HTMLElement) => {
            let link = list.childNodes[0];
            if (link) {
                console.log(link.id);
                this.links.push(link);
            }
        });
    }

    private activateLink(link: Node) {
        this.renderer.addClass(link, this.activeClass);
    }

    private deactivateLink(link: Node) {
        this.renderer.removeClass(link, this.activeClass);
    }

}
