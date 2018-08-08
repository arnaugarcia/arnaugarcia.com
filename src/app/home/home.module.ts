import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HOME_ROUTE} from "./home.route";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
