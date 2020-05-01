import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ContactComponent} from './contact.component';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import {environment} from '../../../environments/environment';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    RecaptchaV3Module
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.reCaptcha.siteKey }
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
