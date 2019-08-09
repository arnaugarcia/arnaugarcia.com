import {NgModule} from '@angular/core';
import {PortfolioComponent} from './portfolio.component';
import {SharedModule} from '../../shared/shared.module';
import { PortfolioFiltersComponent } from './portfolio-filters/portfolio-filters.component';

@NgModule({
    declarations: [PortfolioComponent, PortfolioFiltersComponent],
    imports: [SharedModule],
    exports: [PortfolioComponent]
})
export class PortfolioModule {
}
