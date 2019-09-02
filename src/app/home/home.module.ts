import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HOME_ROUTE} from './home.route';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {ProfileModule} from './profile/profile.module';
import {PortfolioModule} from './portfolio/portfolio.module';
import {ServicesModule} from './services/services.module';
import {ResumeModule} from './resume/resume.module';
import {TechnologiesModule} from './technologies/technologies.module';
import {MapModule} from './map/map.module';
import {ProjectsModule} from './projects/projects.module';
import {ContactModule} from './contact/contact.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([HOME_ROUTE]),
        ProfileModule,
        PortfolioModule,
        ServicesModule,
        ResumeModule,
        TechnologiesModule,
        ProjectsModule,
        ContactModule,
        MapModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
