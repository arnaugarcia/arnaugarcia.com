import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    SharedModule
  ],
  exports: [ServicesComponent]
})
export class ServicesModule { }
