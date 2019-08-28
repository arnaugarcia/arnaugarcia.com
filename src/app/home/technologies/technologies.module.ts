import {NgModule} from '@angular/core';
import {TechnologiesComponent} from './technologies.component';
import {SharedModule} from '../../shared/shared.module';
import {OwlModule} from 'ngx-owl-carousel';

@NgModule({
  declarations: [TechnologiesComponent],
  imports: [
    SharedModule,
    OwlModule
  ],
  exports: [TechnologiesComponent]
})
export class TechnologiesModule { }
