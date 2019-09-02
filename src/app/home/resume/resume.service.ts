import {Injectable} from '@angular/core';
import {IResumeItem} from './resume.model';

@Injectable({
    providedIn: 'root'
})
export class ResumeService {

    query(): IResumeItem[] {
        return [
            {
                title: 'RESUME.ITEMS.0.TITLE',
                subtitle: 'RESUME.ITEMS.0.SUBTITLE',
                year: 'RESUME.ITEMS.0.YEAR',
                image: 'assets/images/resume/opentrends.png',
                description: 'RESUME.ITEMS.0.DESCRIPTION'
            }
        ];
    }

}
