import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

    @Input()
    private value: number;

    @Input()
    private min: number;

    @Input()
    private max: number;

    constructor() {
    }

    ngOnInit(): void {
        console.log(`Min: ${this.min} Max: ${this.max} Value: ${this.value}`);
    }
}
