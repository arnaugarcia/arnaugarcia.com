import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HOME_ROUTE} from "./home.route";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from './header/header.component';
import {ScrollSpyLibModule} from "../../../projects/scroll-spy-lib/src/lib/scroll-spy-lib.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([HOME_ROUTE]),
        ScrollSpyLibModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
