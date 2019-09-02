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
            },
            {
                title: 'RESUME.ITEMS.1.TITLE',
                subtitle: 'RESUME.ITEMS.1.SUBTITLE',
                year: 'RESUME.ITEMS.1.YEAR',
                image: 'assets/images/resume/lasalle.jpg',
                description: 'RESUME.ITEMS.1.DESCRIPTION'
            },
            {
                title: 'RESUME.ITEMS.2.TITLE',
                subtitle: 'RESUME.ITEMS.2.SUBTITLE',
                year: 'RESUME.ITEMS.2.YEAR',
                image: 'assets/images/resume/stucom.jpg',
                description: 'RESUME.ITEMS.2.DESCRIPTION'
            }
        ];
    }

}
