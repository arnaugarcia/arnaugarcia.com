import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IMail, Mail} from './email.model';
import {EmailService} from './email.service';
import {HttpResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    mail: IMail;
    mailSent = false;
    response: string;
    reCaptchaSiteKey: string;
    checkedCaptcha: boolean;

    constructor(private emailService: EmailService,
                private translateService: TranslateService) {
        this.mail = new Mail();
        this.reCaptchaSiteKey = environment.reCaptcha.siteKey;
        this.checkedCaptcha = false;
    }

    onSubmit(): void {
        if (this.checkedCaptcha) {
            this.mailSent = true;
            this.response = this.translateService.instant('CONTACT.LOADING');
            this.emailService.sendMessage(this.mail).subscribe((response: HttpResponse<void>) => {
                this.response = this.translateService.instant('CONTACT.SUCCESS');
            }, error => {
                this.response = this.translateService.instant('CONTACT.ERROR');
                console.error(error);
            });
        }
    }

    resolved(): void {
        this.checkedCaptcha = true;
    }
}
