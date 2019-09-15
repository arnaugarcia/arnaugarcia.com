import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public loadMap = false;

    ngOnInit(): void {
        const targets = document.querySelectorAll('.maps-container');

        const lazyLoad = target => {
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadMap = true;
                        observer.disconnect();
                    }
                });
            }, {
                threshold: 0.1
            });
            io.observe(target);
        };
        targets.forEach(lazyLoad);
    }

}
