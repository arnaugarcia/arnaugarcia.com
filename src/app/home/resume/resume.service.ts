import {Injectable} from '@angular/core';
import {IResumeItem} from './resume.model';

@Injectable({
    providedIn: 'root'
})
export class ResumeService {

    query(): IResumeItem[] {
        return [
            {
                title: 'RESUME.ITEMS.5.TITLE',
                subtitle: 'RESUME.ITEMS.5.SUBTITLE',
                year: 'RESUME.ITEMS.5.YEAR',
                image: 'teacher',
                description: 'RESUME.ITEMS.5.DESCRIPTION'
            },
            {
                title: 'RESUME.ITEMS.0.TITLE',
                subtitle: 'RESUME.ITEMS.0.SUBTITLE',
                year: 'RESUME.ITEMS.0.YEAR',
                image: 'opentrends',
                description: 'RESUME.ITEMS.0.DESCRIPTION'
            },
            {
                title: 'RESUME.ITEMS.1.TITLE',
                subtitle: 'RESUME.ITEMS.1.SUBTITLE',
                year: 'RESUME.ITEMS.1.YEAR',
                image: 'lasalle',
                description: 'RESUME.ITEMS.1.DESCRIPTION'
            },
            {
                title: 'RESUME.ITEMS.3.TITLE',
                subtitle: 'RESUME.ITEMS.3.SUBTITLE',
                year: 'RESUME.ITEMS.3.YEAR',
                image: 'watchity',
                description: 'RESUME.ITEMS.3.DESCRIPTION'
            },
            {
                title: 'RESUME.ITEMS.4.TITLE',
                subtitle: 'RESUME.ITEMS.4.SUBTITLE',
                year: 'RESUME.ITEMS.4.YEAR',
                image: 'angularcamp',
                description: 'RESUME.ITEMS.4.DESCRIPTION'
            },
            {
                title: 'RESUME.ITEMS.2.TITLE',
                subtitle: 'RESUME.ITEMS.2.SUBTITLE',
                year: 'RESUME.ITEMS.2.YEAR',
                image: 'stucom',
                description: 'RESUME.ITEMS.2.DESCRIPTION'
            }
        ];
    }

}
