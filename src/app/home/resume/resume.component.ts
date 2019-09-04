import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IResumeItem} from './resume.model';
import {ResumeService} from './resume.service';

@Component({
    selector: 'app-resume',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

    resumeItems: IResumeItem[] = [];

    constructor(private resumeService: ResumeService) {
    }

    ngOnInit(): void {
      this.resumeItems = this.resumeService.query();
    }

}
