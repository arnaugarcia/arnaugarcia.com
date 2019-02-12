import {ContentChildren, Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {ScrollSpySectionDirective} from "./scroll-spy-section.directive";
import {ActiveElementService} from "./active-element.service";

@Directive({
    selector: '[scrollSpyNav]'
})
export class ScrollSpyNavDirective implements OnInit {

    readonly DEFAULT_ACTIVE_CLASS = 'active';

    @Input()
    private activeClass = this.DEFAULT_ACTIVE_CLASS;

    @Input()
    private offset: number = 20;

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
            let linkActive = this.links.find((link: Node) => link.hash.split('#')[1] == elementActive);
            console.log(linkActive.className);
            if (linkActive) {
                this.activateLink(linkActive);
            }
            /*if (link) {
                console.log(link);
                // let name = link.id.split('#')[1];
                let name = 'portfolio';
                console.log(name);
                console.log(`${name} - ${elementActive}`);
                if (name == elementActive) {
                    this.activateLink(link);
                }
            }*/
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
        this.liTag.forEach((link: Node) => {
            this.links.push(link.childNodes[0]);
        });
    }

    private activateLink(link: Node) {
        this.renderer.addClass(link, this.activeClass);
    }

    private deactivateLink(link: Node) {
        this.renderer.removeClass(link, this.activeClass);
    }

}
