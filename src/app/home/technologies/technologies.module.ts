import {NgModule} from '@angular/core';
import {TechnologiesComponent} from './technologies.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [TechnologiesComponent],
    imports: [SharedModule],
    exports: [TechnologiesComponent]
})
export class TechnologiesModule {
}
