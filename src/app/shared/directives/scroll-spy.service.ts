import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ScrollSpyService {

    private sectionSource = new Subject<string>();

    currentSection$ = this.sectionSource.asObservable();

    changeSection(section: string): void {
        this.sectionSource.next(section);
    }
}
