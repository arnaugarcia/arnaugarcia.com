import {NgModule} from '@angular/core';
import {ResumeComponent} from './resume.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    SharedModule
  ],
  exports: [ResumeComponent]
})
export class ResumeModule { }
