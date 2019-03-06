import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[progressBar]'
})
export class ProgressBarDirective {

    @Input()
    private value: number;

    constructor(private _el: ElementRef) {
        console.log(this._el);
    }

}
