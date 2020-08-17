import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public loadMap = false;

    ngOnInit(): void {
        const targets = document.querySelectorAll('.maps-container');
        const script = this.createGoogleMapsScriptTag();

        const lazyLoad = target => {
            const intersectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        window.initMap = () => {
                            this.showMap();
                        };
                        document.head.append(script);
                        observer.disconnect();
                    }
                });
            }, {
                threshold: 0.1
            });
            intersectionObserver.observe(target);
        };
        targets.forEach(lazyLoad);
    }

    private showMap() {
        this.loadMap = true;
    }

    private createGoogleMapsScriptTag() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&callback=initMap`;
        script.defer = true;
        return script;
    }
}
