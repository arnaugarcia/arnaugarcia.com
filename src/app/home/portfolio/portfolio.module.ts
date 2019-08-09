import {NgModule} from '@angular/core';
import {PortfolioComponent} from './portfolio.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [PortfolioComponent],
    imports: [SharedModule],
    exports: [PortfolioComponent]
})
export class PortfolioModule {
}
