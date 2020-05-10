import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ContactComponent} from './contact.component';
import {RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    RecaptchaModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
