import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HOME_ROUTE} from './home.route';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ProfileModule} from './profile/profile.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([HOME_ROUTE]),
        ProfileModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        PortfolioComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
