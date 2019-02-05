import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HOME_ROUTE} from "./home.route";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from './header/header.component';
import {ParticlesModule} from "angular-particle";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([HOME_ROUTE])
    ],
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
