import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-skills',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

    ngOnInit() {
        const element = document.querySelector('.skills');
        if (element) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach((skills) => {
                    if (this.elementAppeared(skills)) {
                        const progressBars = document.querySelectorAll('.progress-bar');
                        progressBars.forEach(value => {
                            const percent = value.attributes.getNamedItem('aria-valuenow');
                            $(value).animate({'width': percent.value + '%'});
                        });
                    }
                });
            }, {rootMargin: '0px 0px', threshold: 0.00});
            observer.observe(element);
        }
    }

    private elementAppeared(element) {
        return element.intersectionRatio > 0;
    }
}
