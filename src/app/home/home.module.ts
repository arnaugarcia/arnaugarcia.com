import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HOME_ROUTE} from './home.route';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FiltersComponent } from './portfolio/filters/filters.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([HOME_ROUTE])
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        ProfileComponent,
        PortfolioComponent,
        FiltersComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
