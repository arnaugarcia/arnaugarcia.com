import {Component, OnInit} from '@angular/core';
import Typed from "typed.js";
import {TranslateService} from "@ngx-translate/core";

export const myFirstParticle = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#42f477"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#42f477"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#42f477",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

declare var particlesJS: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private translatedText: string = '';
    private typed: Typed;

    constructor(private translateService: TranslateService) {}

    ngOnInit() {

        this.translateService.stream('INTRO.SUBTITLE').subscribe((translation: string | any) => {
            this.translatedText = translation;
            this.initType();
        });

        particlesJS('particles-js', myFirstParticle);

    }

    /**
     * Starts the TypedJS. if the Typed is already running it destroys.
     */
    private initType(): void {
        if (this.typed) {
            this.typed.destroy();
        }
        let options = {
            strings: this.translatedText.split('|'),
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: true,
            loop: true
        };
        this.typed = new Typed("#typed", options);
    }

}
