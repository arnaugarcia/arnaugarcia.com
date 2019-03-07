import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ElementUtil} from "../../../shared/utils/element-util";

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css'],
    animations: [
        trigger('hideShow', [
            state('hide', style({
                opacity: 0,
            })),
            state('show', style({
                opacity: 1,
            })),
            transition('hide => show', [
                animate('1s')
            ])
        ]),
        trigger('emptyFull', [
            state('hide', style({
                width: '0%',
            })),
            state('show', style({
                width: '{{value}}%', // use interpolation
            }), {params: {value: 0}}), // default parameters values required

            transition('hide => show', [
                animate('700ms')
            ])
        ]),
    ]
})
export class ProgressBarComponent implements OnInit {

    @Input()
    private value: number;

    @Input()
    private min: number;

    @Input()
    private max: number;

    private state: string = 'hide';

    constructor(private _el: ElementRef) {
    }

    ngOnInit(): void {
        console.log(`Min: ${this.min} Max: ${this.max} Value: ${this.value}`);
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const inView = ElementUtil.isScrolledIntoView(this._el.nativeElement);
        this.state = inView ? 'show' : 'hide';
    }
}
